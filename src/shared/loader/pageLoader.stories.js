import React from "react";
import PageLoader from "./pageLoader";

export default {
  title: "Shared / PageLoader",
  component: PageLoader,
  parameters: {
    notes: "Shared component: loader shown until a page is lazy loaded."
  },
  decorators: [
    storyFn => <div style={{ border: "1px dotted black" }}>{storyFn()}</div>
  ]
};

export const Loader = () => <PageLoader />;
