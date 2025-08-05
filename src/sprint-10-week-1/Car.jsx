import carImagePath from "../assets/images/car.png";

function Car() {
  return (
    <>
      <img style={{ left: 10 }} src={carImagePath} className={"car"} />
    </>
  );
}

export default Car;
