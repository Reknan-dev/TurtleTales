export default function Section() {
  return (
    <div className="bg-sand text-3xl font-light flex flex-col justify-center items-center pt-12">
      <p className="mb-2.5 text-center w-4/5 max-w-4xl">
        Beach erosion is inexorably reducing suitable space for nesting.
        Furthermore, the trampling of wet people and the use of vehicles heavy
        to clean beaches can cause the destruction of entire nests. Light
        pollution is another important source of disturbance for the little
        turtles that have just emerged from the nest, who are not disoriented
        they manage to find the sea.
      </p>

      <p className="mt-3 font-bold text-center w-4/5 max-w-4xl">
        Turtles are seriously threatened by human activities in different stages
        of their life cycle.
      </p>

      <p className="mt-2.5 text-sm text-center w-4/5 max-w-4xl pb-32">
        You can help us fight the destruction of nests and protect this species.
      </p>

      <div className="relative w-full pb-32">
        <img
          src="https://images.unsplash.com/photo-1568660357733-823cbddb0f6a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Turtle image"
          className="w-full object-contain"
        />

        <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold italic">
          Behind every turtle, there's a Tale...
        </h1>
      </div>
    </div>
  );
}
