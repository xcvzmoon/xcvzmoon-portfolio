<!-- eslint-disable vue/require-default-prop -->
<script lang="ts" setup>
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';

interface InteractiveGridPatternProps {
  className?: HTMLAttributes['class'];
  squaresClassName?: HTMLAttributes['class'];
  width?: number;
  height?: number;
  squares?: [number, number];
}

const props = withDefaults(defineProps<InteractiveGridPatternProps>(), {
  width: 80,
  height: 80,
  squares: () => [50, 50],
});

const { width, height, squares, className, squaresClassName, ...restProps } =
  props;

const horizontal = computed(() => squares[0]);
const vertical = computed(() => squares[1]);

const totalSquares = computed(() => horizontal.value * vertical.value);

const hoveredSquare = ref<number | null>(null);

const gridWidth = computed(() => width * horizontal.value);
const gridHeight = computed(() => height * vertical.value);

function getX(index: number) {
  return (index % horizontal.value) * width;
}

function getY(index: number) {
  return Math.floor(index / horizontal.value) * height;
}

const svgClass = computed(() =>
  cn('absolute inset-0 h-full w-full border', className)
);

function getRectClass(index: number) {
  return cn(
    'stroke-border/40 transition-all duration-100 ease-in-out [&:not(:hover)]:duration-1000',
    hoveredSquare.value === index ? 'fill-primary/20' : 'fill-transparent',
    squaresClassName
  );
}

function handleMouseEnter(index: number) {
  hoveredSquare.value = index;
}

function handleMouseLeave() {
  hoveredSquare.value = null;
}
</script>

<template>
  <svg
    :width="gridWidth"
    :height="gridHeight"
    v-bind="restProps"
    :class="svgClass"
  >
    <rect
      v-for="(_, index) in totalSquares"
      :key="index"
      :x="getX(index)"
      :y="getY(index)"
      :width="width"
      :height="height"
      :class="getRectClass(index)"
      @mouseenter="handleMouseEnter(index)"
      @mouseleave="handleMouseLeave"
    />
  </svg>
</template>
