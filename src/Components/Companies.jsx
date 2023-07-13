import { data } from "../Data"


const Companies = () => {
  return (
    <div className="flex flex-col md:flex-row gap-0 md:gap-2 justify-evenly md:justify-between items-center">
        {data.map(item => (
            <div key={item.id} >
                <img src={item.logo} alt="Company Logo" className="max-w-full h-auto"/>
            </div>
        ))}
    </div>
  )
}

export default Companies