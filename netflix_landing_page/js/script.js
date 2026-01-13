"use strict";
const tabItems = document.querySelectorAll(".tab_item");
const tabContentItems = document.querySelectorAll(".tab-content-item");
// remove border
function removeBorder() {
  tabItems.forEach((item) => item.classList.remove("tab_border"));
}
function removeShow() {
  tabContentItems.forEach((item) => item.classList.remove("show"));
}
// select tab content item
function selectItem(e) {
  removeBorder();
  removeShow();
  // add border to current tab
  this.classList.add("tab_border");
  //   grabl content form item
  const tabContentItem = document.querySelector(`#${this.id}-content`);
  tabContentItem.classList.add("show");
}
// Listen for select tab item
tabItems.forEach((item) => item.addEventListener("click", selectItem));
