import { Fragment } from "react";
import Hero from "./_components/hero";
import FeatureProducts from "./_components/feature-products";

export default function page() {
  return (
    <Fragment>
      <Hero />
      <FeatureProducts />
    </Fragment>
  );
}
