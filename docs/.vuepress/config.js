module.exports = {
    title: 'ng-components',  // 设置网站标题
    description: 'ng-components',
    dest: 'docs/.ng-components/dist',    // 设置输出目录
    base: '/ng-components/', // 项目名称
    repo: 'https://leeesin/github.io/ng-components', // 添加 github 链接
    markdown: {
        lineNumbers: true
    },
    themeConfig: {
        repo: 'Leeesin/ng-components',
        repoLabel: '查看源码',
        docsBranch: 'master/docs',
        editLinks: true,
        editLinkText: '在 GitHub 上编辑此页',
        lastUpdated: '上次更新', // string | boolean
        nav: [
            {
                text: 'nav导航',
                items: [
                    { text: 'ng-components官方文档', link: 'https://ng-components.vuejs.org/zh/guide/' },
                ]
            },
        ],
        sidebar: [
            {
                title: '示例',
                collapsable: false,
                children: [
                    '/demo.md'
                ]
            },
        ],
        sidebarDepth: 2
    },

}