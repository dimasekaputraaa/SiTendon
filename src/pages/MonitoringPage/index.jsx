import Card from "../../components/Cards";

const MonitoringPage = () => {
  return (
    <div className="flex justify-between">
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-x-4 gap-y-10  xl:gap-x-20">
        <Card shadow="shadow lg" />
        <Card shadow="shadow lg" />
        <Card shadow="shadow lg" />
        <Card shadow="shadow lg" />
      </div>
    </div>
  );
};

export default MonitoringPage;
