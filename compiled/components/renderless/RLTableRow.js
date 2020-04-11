"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _default = {
  name: 'RLTableRow',
  props: ['row', 'index'],
  inject: ['allColumns', 'opts', 'rowWasClicked', 'hasChildRow', 'componentsOverride', 'page', 'limit'],
  provide: function provide() {
    var _this = this;

    return {
      row: function row() {
        return _this.row;
      },
      index: this.index
    };
  },
  render: function render() {
    return this.$scopedSlots["default"]({
      columns: this.allColumns(),
      hasChildRow: this.hasChildRow(),
      opts: this.opts(),
      rowId: this.row[this.opts().uniqueKey],
      rowAttrs: {
        "class": this.getClass(),
        attrs: this.opts().rowAttributesCallback ? this.opts().rowAttributesCallback(this.row) : {}
      },
      rowEvents: {
        click: this.rowWasClicked.bind(this, this.row, this.index),
        dblclick: this.rowWasClicked.bind(this, this.row, this.index)
      },
      childRowTogglerFirst: this.hasChildRow() && this.opts().showChildRowToggler && this.opts().childRowTogglerFirst,
      childRowTogglerLast: this.hasChildRow() && this.opts().showChildRowToggler && !this.opts().childRowTogglerFirst,
      override: this.componentsOverride.tableRow
    });
  },
  methods: {
    getClass: function getClass() {
      var cls = '';

      if (this.opts().rowClassCallback) {
        cls += this.opts().rowClassCallback(this.row);
      }

      return cls;
    }
  }
};
exports["default"] = _default;