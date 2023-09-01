<template>
    <nav class="h-full flex flex-col gap-4 bg-red-700 max-w-sm box-border p-8 min-w-240">
        <ul class="flex flex-col gap-3">
            <li v-for="(tab, index) in navTabs" :key="tab.name"
                :class="['capitalize', 'text-lg', 'text-slate-100', 'hover:bg-red-600', 'cursor-pointer', 'p-2', 'rounded-md', index === activeTab && 'bg-red-600']"
                @click="changeActiveTab(index)">
                <span>{{ index + 1 }}. {{ tab.name }}</span>
            </li>
        </ul>
    </nav>
</template>

<script>
export default {
    data() { },
    methods: {

    },

    props: ['navTabs', 'activeTab', 'changeActiveTab']
}
</script>