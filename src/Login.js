/* This example requires Tailwind CSS v2.0+ */
export default function Example({ handleLogin }) {

    return (
        <div style={{ 'color': 'var(--color-green)' }}>
            <div className="max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h1 className="text-6xl font-extrabold tracking-tight sm:text-7xl mb-8">My ToDos
                    <span style={{ 'color': 'var(--color-green-text)' }} className="block">What will you do today?</span> </h1>
                <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
                    <span className="block">Boost your productivity.</span>
                    <span className="block">Get things done.</span>
                </h2>
                <div className="mt-8 flex justify-center">
                    <div onClick={handleLogin} style={{ 'background-color': 'var(--color-green)' }} className="inline-flex rounded-md shadow">
                        <a
                            href="!#"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white hover:bg-indigo-800"
                        >
                            Log in
                        </a>
                    </div>
                    <div className="ml-3 inline-flex">
                        <a
                            href="!#"
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}
