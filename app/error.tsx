"use client"

type ErrorType = {
  error: {
    message: string;
  }
}

export default function Error({ error }: ErrorType): JSX.Element {
  return (
    <main className="error">
      <h1>An Error Occurred</h1>
      <p>{error.message}</p>
    </main>
  )
}