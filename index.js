class DOMUtils {
  static selectors = {
    pagination: "#pagination",
    paginationPageLink: "a.page-link",
    paginationNext: "a.page-link.next",
    paginationPrev: "a.page-link.prev",
  };

  static get = {
    pagination() {
      return $(DOMUtils.selectors.pagination);
    },
    paginationPageLink() {
      return $(DOMUtils.selectors.paginationPageLink);
    },
    paginationNext() {
      return $(DOMUtils.selectors.paginationNext);
    },
    paginationPrev() {
      return $(DOMUtils.selectors.paginationPrev);
    },
  };
}

$(window).on("DOMContentLoaded", () => {
  console.log(DOMUtils.get.pagination());
  DOMUtils.get.pagination().pagination({
    items: 700,
    itemsOnPage: 15,
    displayedPages: 3,
    edges: 1,
    useStartEdge: true,
    useEndEdge: true,
    currentPage: 0,
    useAnchors: false,
    listStyle: "",
    selectOnClick: true,
    onPageClick(pageNumber, event) {
      console.log(pageNumber);
    },
  });
});
