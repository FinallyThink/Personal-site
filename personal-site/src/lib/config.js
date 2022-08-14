
   import header_svg from "@/assets/image/header-life.svg";
   import header_svg_pink from "@/assets/image/header-life_pink.svg";


   const config =  {
    install(Vue) {
        Vue.prototype.$state = {
            menu: [{
                    id: 1,
                    name: "主站",
                    href: "/",
                    selected: true
                },
                {
                    id: 2,
                    name: "典藏",
                    href: "/collect",
                    selected: false
                },
                {
                    id: 3,
                    name: "日志",
                    href: "/diary",
                    selected: false
                },
                {
                    id: 4,
                    name: "工具",
                    href: "/MyTool",
                    selected: false
                },
                {
                    id: 5,
                    name: "简历",
                    href: "#",
                    selected: false
                },
            ],
            friends: [{
                    id: 1,
                    name: "还没有呢",
                    href: "#",

                },
            ],
            api:"./article/index",
            api_article:"./article/",
            backgroundMP4:true,
            header_svg: {
                default: header_svg,
                pink: header_svg_pink
            }
        }

    }
}


export default config;