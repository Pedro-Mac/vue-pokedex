<template>
    <li :class="['capitalize', 'text-lg', 'hover:bg-slate-100', 'hover:text-red-700', 'cursor-pointer', 'p-2', 'rounded-md', isActiveTab && 'bg-white', isActiveTab ? 'text-red-700' : 'text-slate-100']"
        @click="changeActiveTab(placement - 1)">
        <span>{{ placement }}. {{ tab.name }}</span>
    </li>
</template>

<script>
export default {
    props: ['tab', 'isActiveTab', 'changeActiveTab', 'placement']
}
</script>