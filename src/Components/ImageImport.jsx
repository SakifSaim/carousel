import { ImageData } from '../Data'

function ImageImport() {
  return (
    <div className="grid md:grid-cols-3 grid-cols-2 gap-5">
      {ImageData.map((record) => (
        <div key={record.id}>
          <img
            className="w-full gap-5"
            src={`../src/images/${record.url}`}
            alt={record.caption}
          />
        </div>
      ))}
    </div>
  )
}

export default ImageImport
