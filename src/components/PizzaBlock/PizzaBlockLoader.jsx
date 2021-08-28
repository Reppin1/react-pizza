import ContentLoader from "react-content-loader";

const PizzaBlockPlaceholder = () => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="137" cy="148" r="120" />
    <rect x="2" y="287" rx="3" ry="3" width="280" height="24" />
    <rect x="2" y="326" rx="6" ry="6" width="280" height="84" />
    <rect x="2" y="419" rx="3" ry="3" width="77" height="28" />
    <rect x="154" y="419" rx="19" ry="19" width="125" height="40" />
  </ContentLoader>
)

export { PizzaBlockPlaceholder }