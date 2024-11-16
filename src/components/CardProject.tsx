interface Project {
    imagen : string
    nombre : string
    tecnologias : string
  }
const CardProject = ({data,bColor}: {data: Project; bColor: string}) => {
  return (
    <div className="flex flex-col">
          <div className="max-w-[337px]">
            <img
              className={`rounded-xl border-4 border-${bColor}`}
              src={data.imagen}
              alt="projects1-cp"
            />
          </div>
          <h1 className="font-semibold">{data.nombre}</h1>
          <h1>{data.tecnologias}</h1>
        </div>
  )
}
export default CardProject