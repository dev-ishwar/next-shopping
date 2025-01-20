"use client";
type PropsType = {
    error: Error & { digest: string },
    reset: () => void
}

const Errorpage = ({ error, reset }: PropsType) => {
    return (
        <main className="grid place-content-center mt-10">
            <div className='shadow rounded-md shadow-[--darker-color] text-center p-10'>
                <h2 className="text-2xl mb-2">Oops! Something went wrong.</h2>
                <p>{error.message}</p>
                <button
                    onClick={reset}
                    className="border border-[currentColor] inline-block px-3 py-1 mt-5 hover:bg-[--button-hover] rounded-sm"
                >Try Again</button>
            </div>
        </main>
    )
}

export default Errorpage;