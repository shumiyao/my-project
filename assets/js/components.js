// Components
Vue.component("Layout", {
  template: decodeURIComponent(siteData.template_parts.layout.template),
  data() {
    return {
      wrapperClass: "min-h-screen flex flex-col",
    };
  },
});

Vue.component("ContentBody", {
  template: decodeURIComponent(siteData.template_parts.header.template),
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    async directToPage(pageID) {
      // redirect to the next page
      const _pageSlug = this.getPageSlug(pageID);
      // / for homepage (root top)
      await this.$router.push(
        { path: _pageSlug || "/" },
        // onComplete
        () => {
          this.pageUpdatedSequencer(pageID);
        },
        // onAbort
        (error) => error
      );
    },
  },
});

// Section template

// block template

Vue.component("Header", {
  template: decodeURIComponent(siteData.template_parts.header.template),
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    async directToPage(pageID) {
      // redirect to the next page
      const _pageSlug = this.getPageSlug(pageID);
      // / for homepage (root top)
      await this.$router.push(
        { path: _pageSlug || "/" },
        // onComplete
        () => {
          this.pageUpdatedSequencer(pageID);
        },
        // onAbort
        (error) => error
      );
    },
  },
});

Vue.component("Blocks", {
  template: decodeURIComponent(siteData.template_parts.blocks.template),
  data() {
    return {
      wrapperClass: "flex-1",
      filter: "all",
    };
  },
  methods: {
    /**
     * Get all the types of grid items and return as an array for the filter menu.
     * @param {Array} gridItems Contents of grid items (block.data.items)
     * @returns  Array or boolean   Returns an array with all the item types available or false when it is not necessary to show the filter.
     */
    getGridFilterItemsInArray(gridItems = []) {
      // No need for filter because there is not any item.
      if (gridItems.length === 0) return false;
      console.log(gridItems);
      const _listOfItemTypes = [...new Set(gridItems.map((item) => item.type))];
      // Return an array with item types.
      if (_listOfItemTypes.length > 1) return ["all", ..._listOfItemTypes];
      // No need to show filter because there is only one type of items.
      return false;
    },
  },
});

Vue.component("Footer", {
  template: decodeURIComponent(siteData.template_parts.footer.template),
});
