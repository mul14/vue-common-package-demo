import { defineComponent, openBlock, createBlock, createVNode, toDisplayString, withDirectives, vShow, createCommentVNode } from 'vue';

var script = defineComponent({
    name: "DemoComponent",
    data: function () {
        return {
            title: "Demo Component",
            isOpen: false,
        };
    },
    methods: {
        toggle: function () {
            this.isOpen = !this.isOpen;
        }
    }
});

const _hoisted_1 = { key: 0 };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return (openBlock(), createBlock("div", null, [
    createVNode("h1", null, toDisplayString(_ctx.title), 1 /* TEXT */),
    createVNode("button", {
      onClick: _cache[1] || (_cache[1] = (...args) => (_ctx.toggle && _ctx.toggle(...args)))
    }, "Click me to show/hide"),
    withDirectives(createVNode("div", null, "Lorem ipsum using v-show", 512 /* NEED_PATCH */), [
      [vShow, _ctx.isOpen]
    ]),
    (_ctx.isOpen)
      ? (openBlock(), createBlock("div", _hoisted_1, "Lorem ipsum using v-if"))
      : createCommentVNode("v-if", true)
  ]))
}

script.render = render;
script.__file = "src/components/Demo.vue";

export { script as Demo };
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIi4uL3NyYy9jb21wb25lbnRzL0RlbW8udnVlIiwiLi4vc3JjL2NvbXBvbmVudHMvRGVtby52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9MDkyNjAwOTMmbGFuZy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGgxPnt7IHRpdGxlIH19PC9oMT5cbiAgICA8YnV0dG9uIEBjbGljaz1cInRvZ2dsZVwiPkNsaWNrIG1lIHRvIHNob3cvaGlkZTwvYnV0dG9uPlxuICAgIDxkaXYgdi1zaG93PVwiaXNPcGVuXCI+TG9yZW0gaXBzdW0gdXNpbmcgdi1zaG93PC9kaXY+XG4gICAgPGRpdiB2LWlmPVwiaXNPcGVuXCI+TG9yZW0gaXBzdW0gdXNpbmcgdi1pZjwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tIFwidnVlXCI7XG5cbmludGVyZmFjZSBDb21wb25lbnREYXRhIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgaXNPcGVuOiBib29sZWFuLFxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiBcIkRlbW9Db21wb25lbnRcIixcblxuICBkYXRhKCk6IENvbXBvbmVudERhdGEge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogXCJEZW1vIENvbXBvbmVudFwiLFxuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICB9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGUoKSB7XG4gICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICB9XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iLCI8dGVtcGxhdGU+XG4gIDxkaXY+XG4gICAgPGgxPnt7IHRpdGxlIH19PC9oMT5cbiAgICA8YnV0dG9uIEBjbGljaz1cInRvZ2dsZVwiPkNsaWNrIG1lIHRvIHNob3cvaGlkZTwvYnV0dG9uPlxuICAgIDxkaXYgdi1zaG93PVwiaXNPcGVuXCI+TG9yZW0gaXBzdW0gdXNpbmcgdi1zaG93PC9kaXY+XG4gICAgPGRpdiB2LWlmPVwiaXNPcGVuXCI+TG9yZW0gaXBzdW0gdXNpbmcgdi1pZjwvZGl2PlxuICA8L2Rpdj5cbjwvdGVtcGxhdGU+XG5cbjxzY3JpcHQgbGFuZz1cInRzXCI+XG5pbXBvcnQgeyBkZWZpbmVDb21wb25lbnQgfSBmcm9tIFwidnVlXCI7XG5cbmludGVyZmFjZSBDb21wb25lbnREYXRhIHtcbiAgdGl0bGU6IHN0cmluZztcbiAgaXNPcGVuOiBib29sZWFuLFxufVxuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb21wb25lbnQoe1xuICBuYW1lOiBcIkRlbW9Db21wb25lbnRcIixcblxuICBkYXRhKCk6IENvbXBvbmVudERhdGEge1xuICAgIHJldHVybiB7XG4gICAgICB0aXRsZTogXCJEZW1vIENvbXBvbmVudFwiLFxuICAgICAgaXNPcGVuOiBmYWxzZSxcbiAgICB9O1xuICB9LFxuXG4gIG1ldGhvZHM6IHtcbiAgICB0b2dnbGUoKSB7XG4gICAgICB0aGlzLmlzT3BlbiA9ICF0aGlzLmlzT3BlbjtcbiAgICB9XG4gIH1cbn0pO1xuPC9zY3JpcHQ+XG4iXSwibmFtZXMiOlsiX2NyZWF0ZUJsb2NrIiwiX2NyZWF0ZVZOb2RlIl0sIm1hcHBpbmdzIjoiOztBQWlCQSxhQUFlLGVBQWUsQ0FBQztJQUM3QixJQUFJLEVBQUUsZUFBZTtJQUVyQixJQUFJLEVBQUo7UUFDRSxPQUFPO1lBQ0wsS0FBSyxFQUFFLGdCQUFnQjtZQUN2QixNQUFNLEVBQUUsS0FBSztTQUNkO0tBQ0Y7SUFFRCxPQUFPLEVBQUU7UUFDUCxNQUFNO1lBQ0osSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsTUFBTTs7O0NBRy9CLENBQUM7Ozs7O3VCQy9CQUE7SUFDRUMsd0NBQU87SUFDUEE7TUFBUyxPQUFLLDBDQUFFLG1DQUFNO09BQUUsdUJBQXFCO21CQUM3Q0EseUJBQXFCLDBCQUF3QjtjQUFoQyxXQUFNOztLQUNSLFdBQU07c0JBQWpCRCwrQkFBbUIsd0JBQXNCOzs7Ozs7Ozs7OyJ9
