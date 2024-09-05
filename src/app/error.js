"use client"

const ErrorPage = ({error , reset}) => {
  return (
    <div>
      <h1 className="text-center text-2xl text-red-700">Something went wrong!!!</h1>
      <h2 className="text-center text-2xl text-red-700">{error.message}</h2>
      <button className=" btn-primary" onClick={() => reset()}>Try Again</button>
    </div>
  )
}

export default ErrorPage;
