function page() {
  return (
    <div className="w-full items-center flex flex-col py-16">
      <h1 className="text-center">
        <span className="opacity-50">Hi, we're </span>
        <br /> Gian{`’`}s Bus Services
      </h1>

      <div className="flex flex-col space-y-6 opacity-75 w-[45ch] max-sm:w-full pt-10">
        <p className="sm:text-center">
          Gian's Bus Services is a premium transportation company that connects
          travelers across Malawi with safe, comfortable, and affordable bus
          travel experiences.
        </p>

        <p className="sm:text-center">
          We provide comprehensive travel solutions including ticket
          reservations, scheduled routes, and reliable transportation services,
          making your journey across Malawi smooth and hassle-free.
        </p>

        <p className="sm:text-center">
          Our mission is to transform bus travel in Malawi by offering
          transparent pricing, punctual schedules, and comfortable rides that
          put your safety and satisfaction first, without compromising your
          budget.
        </p>
      </div>
    </div>
  );
}

export default page;
