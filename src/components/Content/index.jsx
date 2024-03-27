import GaugeComponent from "../Chart/GaugeComponent";

const Content = () => {
  return (
    <div className="flex justify-center min-h-full items-center grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
      <GaugeComponent />
    </div>
  );
};

export default Content;
