import { NavLink } from "react-router-dom";


function ListCard(props) {



  return (
    <>
      <NavLink to={{ pathname: "/detail" }} state={{ vibeId: props.vibe.id }}>
      {/* <div className="grid grid-cols-6 gap-4 grid-flow-row grid-"> */}

        <div className="container my-12 mx-auto px-4 md:px-12">
          <div className="flex flex-wrap w-fit -mx-1 lg:-mx-1">
            {/* <div className="my-1 px-3 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3"> */}
              <article className="overflow-hidden rounded-lg shadow-lg">
                <a href="#">
                  <img
                    alt="Placeholder"
                    className="block h-auto w-full"
                    src="https://picsum.photos/600/400/?random"
                  />
                </a>

                <header className="flex items-center justify-between leading-tight p-3 md:p-12">
                  <h1 className="text-sm">
                    <a className="no-underline text-black">
                      {props.vibe.name}
                    </a>
                  </h1>
                </header>
                <h2 className="text-sm">
                  {props.vibe.activities.map((activity) => (
                    <>
                      <div className="text-sm mb-2">{activity.category} </div>
                      <div className="text-sm mb-2">{activity.name}</div>
                    </>
                  ))}
                </h2>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                  <a
                    className="flex items-center no-underline hover:underline text-black"
                    href="#"
                  >
                    <p className="ml-8 text-sm">{props.vibe.created_by}</p>
                  </a>

                </footer>
              </article>
            </div>
          {/* </div> */}
        {/* </div> */}
        </div>
      </NavLink>
      

    </>
  );
}

export default ListCard;
