<script setup lang="ts">
type ButtonTheme = 'default' | 'primary' | 'secondary' | 'destructive' | 'outline' | 'ghost' | 'link'

interface ButtonProps {
  theme?: ButtonTheme
}

const props = withDefaults(defineProps<ButtonProps>(), {
  theme: 'default'
})

const themeClasses: Record<ButtonTheme, string> = {
  default: 'bg-slate-900 text-white hover:bg-slate-800',
  primary: 'bg-primary text-primary-foreground hover:bg-primary/90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  outline: 'border border-input bg-background hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  link: 'text-primary underline-offset-4 hover:underline'
}
</script>

<template>
  <button
    :class="[
      'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
      'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
      'disabled:opacity-50 disabled:pointer-events-none',
      'h-10 px-4 py-2',
      themeClasses[theme]
    ]"
  >
    <slot></slot>
  </button>
</template> 