/**
 * `var siteData = { ${_jsonData} };`
 */

var siteData = {
  "logoImageUrl": "",
  "projectTitle": "Project Title",
  "templateName": "",
  "siteEmail": "",
  "facebookPageName": "",
  "instagramAccountName": "",
  "twitterAccountName": "",
  "youtubeChannelUrl": "",
  "cookieConsent": "",
  "copyrightStatement": "",
  "siteSettings_navigation": [
    {
      "id": 1,
      "home": true,
      "name": "Home 1112",
      "show": false,
      "item_type": "page"
    },
    {
      "id": 2,
      "home": false,
      "name": "Another test page",
      "show": false,
      "item_type": "page"
    },
    {
      "id": 3,
      "home": false,
      "name": "test",
      "show": false,
      "item_type": "page"
    }
  ],
  "pages": {
    "1": {
      "title": "Home",
      "slug": "",
      "blocks": [
        {
          "data": {
            "text": "Sample paragraphtest"
          },
          "type": "paragraph"
        },
        {
          "data": {
            "text": "Sample titleaaaaaaaaaa",
            "level": 2
          },
          "type": "header"
        }
      ],
    },
    "2": {
      "title": "Another test page",
      "slug": "another-test-page",
      "blocks": [
        {
          "data": {
            "text": "test page 1"
          },
          "type": "paragraph"
        }
      ],
    },
    "3": {
      "title": "Test",
      "slug": "test",
      "blocks": [
        {
          "data": {
            "text": "asaasdasd"
          },
          "type": "paragraph"
        }
      ],
    },
  },
  "template_parts": {
    "layout": {
      "template": "<div class=\"bg-blueberry text-body-blueberry pb-px text-18px leading-looser\"><slot></slot></div>"
    },
    "header": {
      "template": "<header class=\"py-8 mb-16 relative top-0 z-50\"><div class=\"max-w-6xl px-4 mx-auto flex flex-wrap justify-between\"><div v-if=\"logoImageUrl\"><img :src=\"logoImageUrl\" class=\"fill-current w-24\" :alt=\"projectTitle || ''\"></div><div class=\"max-w-logo text-white\" v-else=\"\"><h2 class=\"text-white uppercase text-lg font-semibold\"><a href=\"/\">{{ templateName }}</a></h2></div><button @click=\"showMenu = !showMenu\" class=\"navigation-show w-10 block relative md:hidden\" :class=\"{'active': showMenu}\" aria-label=\"show navigation\"><span class=\"w-6 h-2px mx-auto mb-5px block relative pointer-events-none origin-center bg-white\"></span><span class=\"w-6 h-2px mx-auto mb-5px block relative pointer-events-none origin-center bg-white\"></span><span class=\"w-6 h-2px mx-auto mb-5px block relative pointer-events-none origin-center bg-white\"></span></button><nav class=\"w-full md:w-auto md:flex mt-4 md:m-0\" :class=\"{'hidden': !showMenu}\"><ul class=\"flex flex-wrap flex-col md:flex-row items-end md:items-center text-blakc p-4 -mr-4 md:-mr-12 md:bg-transparent md:p-0\"><li v-for=\"pageMenuItem in siteSettings_navigation\" :key=\"pageMenuItem.id\" class=\"flex justify-end md:px-6 mb-4 md:m-0\"><a :href=\"\n              pageMenuItem.custom &amp;&amp; pageMenuItem.custom === true\n                ? pageMenuItem.url\n                : 'javascript:void(0)'\n            \" :target=\"pageMenuItem.custom &amp;&amp; pageMenuItem.custom === true ? '_blank' : ''\" class=\"text-sm text-black opacity-50 hover:text-black hover:opacity-100 uppercase transition-all duration-300 ease-in\" :class=\"{\n              'text-black opacity-100' : $route.path == pageMenuItem.id\n            }\" @click=\"directToPage(pageMenuItem.id)\" v-html=\"pageMenuItem.name\"></a></li><li class=\"md:pl-6\"></li></ul></nav></div></header>"
    },
    "masthead": {
      "template": "<section class=\"masthead max-w-6xl h-masthead px-4 mx-auto -mt-16 mb-20\" :class=\"{'max-w-6xl px-4 md:mx-auto': !mastheadData.stretched}\"><div class=\"h-masthead relative\"><div class=\"masthead-image w-full h-full absolute bg-fixed bg-cover bg-center bg-no-repeat shadow-2xl\" :style=\"`background-image: url('${mastheadData.file.url}');`\"></div><div class=\"media-overlay absolute w-full h-full bg-black opacity-25 hidden\"></div><div class=\"flex flex-col relative z-10 items-center justify-center h-full\"><h1 class=\"leading-snug mb-2 text-2xl md:text-3xl bg-turquoise text-blueberry\">{{ mastheadData.text }}</h1></div></div></section>"
    },
    "blocks": {
      "template": "<div>{{blocks}}<template v-for=\"(block, index) in blocks\"><h1 v-if=\"block.type === 'header' &amp;&amp; block.data.level == 1\" :key=\"index\" class=\"max-w-6xl px-4 md:px-40 mx-auto mb-12 leading-none text-white\" :class=\"{'max-w-6xl md:mx-auto': !block.data.stretched}\">{{ block.data.text }}</h1><h2 v-if=\"block.type === 'header' &amp;&amp; block.data.level == 2\" :key=\"index\" class=\"max-w-6xl px-4 md:px-40 mx-auto mb-12 text-2xl leading-snug text-white\" :class=\"{'max-w-6xl md:mx-auto': !block.data.stretched}\">{{ block.data.text }}</h2><h3 v-if=\"block.type === 'header' &amp;&amp; block.data.level == 3\" :key=\"index\" class=\"max-w-6xl px-4 md:px-40 mx-auto mb-12 text-xl leading-snug text-white\" :class=\"{'max-w-6xl md:mx-auto': !block.data.stretched}\">{{ block.data.text }}</h3><h4 v-if=\"block.type === 'header' &amp;&amp; block.data.level == 4\" :key=\"index\" class=\"max-w-6xl px-4 md:px-40 mx-auto mb-12 text-lg leading-snug text-white\" :class=\"{'max-w-6xl md:mx-auto': !block.data.stretched}\">{{ block.data.text }}</h4><h5 v-if=\"block.type === 'header' &amp;&amp; block.data.level == 5\" :key=\"index\" class=\"max-w-6xl px-4 md:px-40 mx-auto mb-12 text-base leading-snug text-white\" :class=\"{'max-w-6xl md:mx-auto': !block.data.stretched}\">{{ block.data.text }}</h5><h6 v-if=\"block.type === 'header' &amp;&amp; block.data.level == 6\" :key=\"index\" class=\"max-w-6xl px-4 md:px-40 mx-auto mb-12 text-tiny leading-snug text-white\" :class=\"{'max-w-6xl md:mx-auto': !block.data.stretched}\">{{ block.data.text }}</h6><p v-if=\"block.type === 'paragraph'\" :key=\"index\" class=\"max-w-6xl px-4 md:px-40 mx-auto mb-16\" :class=\"{'max-w-6xl md:mx-auto': !block.data.stretched}\">{{ block.data.text }}</p><ol v-if=\"block.type === 'list'\" :key=\"index\" class=\"list-decimal list-inside max-w-6xl px-4 md:px-40 mx-auto mb-16\"><li v-for=\"(item, itemIndex) in block.data.items\" :key=\"itemIndex\">{{ item }}</li></ol><div v-if=\"block.type === 'delimiter'\" :key=\"index\" class=\"max-w-6xl px-4 md:px-40 md:pl-40 mx-auto my-16 flex\"><hr class=\"w-64 h-0 mr-auto pb-1px bg-white opacity-50\"></div><blockquote v-if=\"block.type === 'quote'\" :key=\"index\" class=\"max-w-6xl px-4 mx-auto mb-16 text-xl md:text-2xl relative leading-snug text-left\"><span class=\"relative z-10 leading-snug bg-turquoise text-blueberry\">{{ block.data.text }}</span><svg class=\"w-16 md:w-32 absolute -top-4 md:-top-8 left-4 md:-left-12 text-quote-blueberry hidden\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><path d=\"M23.7 22.5h-9.2c-.1-.2-.1-.3-.1-.4 0-3.8-.1-7.6.1-11.3.3-4.8 4.3-8.8 9.3-9.3v3.8c0 .2-.4.6-.7.7-2.6 1.3-3.8 3.3-3.6 6.4H23.8c-.1 3.4-.1 6.7-.1 10.1zM5.2 12.5h4.3v10H.3c0-.2-.1-.3-.1-.5 0-3.5-.1-7 0-10.4.2-5.1 3.9-9.2 8.9-10h.4v3.7c0 .2-.3.6-.5.7-2.9 1.1-3.8 3.4-3.8 6.5z\"></path></svg></blockquote><div v-if=\"block.type === 'image'\" :key=\"index\" class=\"px-4 md:px-40 mb-8 relative z-1\" :class=\"{'max-w-6xl mx-auto': !block.data.stretched}\"><img :src=\"block.data.file.url\" :alt=\"block.data.caption\" class=\"shadow-2xl\" :class=\"{'w-full': block.data.stretched}\"><p v-if=\"block.data.caption\" class=\"mt-2 italic\">{{ block.data.caption }}</p></div><div v-if=\"block.type === 'embed' &amp;&amp; block.data.service === 'vimeo'\" :key=\"index\" class=\"embed-container relative lazyload-video\" :class=\"{'max-w-6xl px-4 md:px-40 mx-auto': !block.data.stretched}\"><iframe class=\"embed\" :width=\"block.data.width\" :height=\"block.data.height\" :data-src=\"block.data.embed\" src=\"\" title=\"Vimeo video\" frameborder=\"0\" allowfullscreen=\"\"></iframe></div><div v-if=\"block.type === 'embed' &amp;&amp; block.data.service === 'youtube'\" :key=\"index\" class=\"embed-container relative lazyload-video\" :class=\"{'max-w-6xl px-4 md:px-40 mx-auto': !block.data.stretched}\"><iframe class=\"embed\" :width=\"block.data.width\" :height=\"block.data.height\" :data-src=\"block.data.embed\" src=\"\" title=\"YouTube video\" frameborder=\"0\" allowfullscreen=\"\"></iframe></div><section v-if=\"block.type === 'grid'\" :key=\"index\"><ul v-if=\"getGridFilterItemsInArray(block.data.items)\" class=\"grid-filter max-w-6xl px-4 mx-auto flex text-sm uppercase mb-16\"><li v-for=\"(link) in getGridFilterItemsInArray(block.data.items)\" :key=\"link\" @click=\"filter = link\" class=\"px-2 cursor-pointer text-pink-oyster opacity-50 hover:text-pink-oyster hover:opacity-100\" :class=\"{'active': filter == link}\">{{ link }}</li></ul><ul class=\"project-grid md:grid-cols-1 mx-auto\" :class=\"[{'gap-12': blocks[0].data.gaps}, {'max-w-6xl px-4': !blocks[0].data.stretched}, `grid-cols-${blocks[0].data.columns}`]\"><li v-for=\"(item) in block.data.items\" :key=\"item.image\" class=\"grid-item\" :class=\"[`col-span-${item.cols}`, `row-span-${item.rows}`, `type-${item.type}`]\" v-show=\"item.type == filter || filter == 'all'\"><figure><a :href=\"embedURL(item.url)\" :class=\"{'glightbox': item.type == 'video'}\" :data-type=\"[item.type == 'video' ? 'external' : '']\" data-width=\"900\" data-height=\"500\" :target=\"[item.type == 'video' ? '_self' : '_blank']\" rel=\"noopener\"><img src=\"data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPUNff4DwAC8gGtEb08EAAAAABJRU5ErkJggg==\" :data-src=\"item.image\" class=\"shadow-2xl\" :alt=\"item.title\"><figcaption v-if=\"item.type !== 'video' &amp;&amp; item.title !== ''\" class=\"p-2 absolute md:relative bg-turquoise text-blueberry text-2xl leading-none\">{{ item.title }}</figcaption><figcaption v-else=\"\" class=\"video w-full h-full absolute md:relative\"><div v-if=\"item.title !== ''\" class=\"w-full\"><span class=\"p-2 bg-turquoise text-blueberry text-2xl leading-none\">{{ item.title }}</span></div><span class=\"flex w-12 h-12 mx-auto rounded-full absolute bottom-3 right-4 bg-white text-blueberry\"><svg class=\"w-10 mx-auto fill-current\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 30.051 30.051\"><path d=\"M19.982 14.438l-6.24-4.536a.752.752 0 00-1.195.607v9.069a.75.75 0 001.195.606l6.24-4.532a.747.747 0 000-1.214z\"></path></svg></span></figcaption></a></figure></li></ul></section></template></div>"
    },
    "footer": {
      "template": "<footer class=\"pt-20 text-left text-white mb-8\"><div class=\"max-w-6xl px-4 mx-auto flex flex-col items-center\"><div class=\"mb-4 mx-auto text-sm opacity-50\">{{ copyrightStatement }}<a href=\"/\" class=\"hover:underline\">IMPRESSUM</a>.<a v-show=\"cookieConsent\" :href=\"cookieConsent\" class=\"hover:underline\">PRIVACY</a></div><ul class=\"flex -mx-3 mx-auto\"><li v-show=\"facebookPageName &amp;&amp; facebookPageName !== ''\" class=\"mx-3\"><a :href=\"`https://facebook.com/${facebookPageName}`\" class=\"text-white\" aria-label=\"visit facebook\"><svg class=\"fill-current w-6 opacity-50 hover:opacity-100 transition-all duration-300 ease-in\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 64 64\"><path d=\"M57.378.001H3.352A3.352 3.352 0 000 3.353v54.026a3.353 3.353 0 003.352 3.354h29.086V37.214h-7.914v-9.167h7.914v-6.76c0-7.843 4.789-12.116 11.787-12.116 3.355 0 6.232.251 7.071.36v8.198l-4.854.002c-3.805 0-4.539 1.809-4.539 4.462v5.851h9.078l-1.187 9.166h-7.892v23.52h15.475a3.355 3.355 0 003.355-3.351V3.351a3.352 3.352 0 00-3.354-3.35z\"></path></svg></a></li><li v-show=\"instagramAccountName &amp;&amp; instagramAccountName !== ''\" class=\"mx-3\"><a :href=\"`https://instagram.com/${instagramAccountName}`\" class=\"text-white\" aria-label=\"visit instagram\"><svg class=\"fill-current w-6 opacity-50 hover:opacity-100 transition-all duration-300 ease-in\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 169.063 169.063\"><path d=\"M122.406 0H46.654C20.929 0 0 20.93 0 46.655v75.752c0 25.726 20.929 46.655 46.654 46.655h75.752c25.727 0 46.656-20.93 46.656-46.655V46.655C169.063 20.93 148.133 0 122.406 0zm31.657 122.407c0 17.455-14.201 31.655-31.656 31.655H46.654C29.2 154.063 15 139.862 15 122.407V46.655C15 29.201 29.2 15 46.654 15h75.752c17.455 0 31.656 14.201 31.656 31.655v75.752z\"></path><path d=\"M84.531 40.97c-24.021 0-43.563 19.542-43.563 43.563 0 24.02 19.542 43.561 43.563 43.561s43.563-19.541 43.563-43.561c0-24.021-19.542-43.563-43.563-43.563zm0 72.123c-15.749 0-28.563-12.812-28.563-28.561 0-15.75 12.813-28.563 28.563-28.563s28.563 12.813 28.563 28.563c0 15.749-12.814 28.561-28.563 28.561zM129.921 28.251c-2.89 0-5.729 1.17-7.77 3.22-2.051 2.04-3.23 4.88-3.23 7.78 0 2.891 1.18 5.73 3.23 7.78 2.04 2.04 4.88 3.22 7.77 3.22 2.9 0 5.73-1.18 7.78-3.22 2.05-2.05 3.22-4.89 3.22-7.78 0-2.9-1.17-5.74-3.22-7.78-2.04-2.05-4.88-3.22-7.78-3.22z\"></path></svg></a></li><li v-show=\"twitterAccountName &amp;&amp; twitterAccountName !== ''\" class=\"mx-3\"><a :href=\"`https://twitter.com/${twitterAccountName}`\" class=\"text-white\" aria-label=\"visit twitter\"><svg class=\"fill-current w-6 opacity-50 hover:opacity-100 transition-all duration-300 ease-in\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z\"></path></svg></a></li><li v-show=\"youtubeChannelUrl &amp;&amp; youtubeChannelUrl !== ''\" class=\"mx-3\"><a :href=\"youtubeChannelUrl\" class=\"text-white\" aria-label=\"visit youtube\"><svg class=\"fill-current w-6 opacity-50 hover:opacity-100 transition-all duration-300 ease-in\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 512 512\"><path d=\"M490.24 113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936 80.864 322.848 80 256.064 80c-66.912 0-144.032.864-174.656 2.912-30.624 1.76-45.728 6.272-59.744 31.008C7.36 138.592 0 181.088 0 255.904v.256c0 74.496 7.36 117.312 21.664 141.728 14.016 24.704 29.088 29.184 59.712 31.264C112.032 430.944 189.152 432 256.064 432c66.784 0 143.872-1.056 174.56-2.816 30.688-2.08 45.76-6.56 59.648-31.264C504.704 373.504 512 330.688 512 256.192v-.16-.096c0-74.848-7.296-117.344-21.76-142.016zM192 352V160l160 96-160 96z\"></path></svg></a></li></ul></div></footer>"
    }
  }
};
