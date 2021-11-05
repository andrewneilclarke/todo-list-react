
export default function Example({ handleLogin, hasAccount, setHasAccount, handleSignup, email, setEmail, emailError, password, setPassword, passwordError }) {

    return (
        <div className="h-full w-full" style={{ 'color': 'var(--color-green)' }}>
            <div className="flex flex-col items-center overflow-hidden max-w-7xl mx-auto text-center py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
                <h1 className="text-5xl font-extrabold tracking-tight lg:text-6xl mb-12">My ToDos
                    <span style={{ 'color': 'var(--color-green-text)', 'marginTop': '1.5rem' }} className="block sm:text-3xl">What will you do today?</span> </h1>
                <h2 className="font-extrabold sm:text-3xl tracking-tight">
                    <span className="block">Boost your productivity.</span>
                    <span className="block">Get things done.</span>
                </h2>
                <div className="mt-8 flex justify-center mb-12 font-extrabold">
                    <form className="flex flex-col">
                        <label>Email</label>
                        <input className="rounded-md mt-2 mb-2" type="text" autoFocus required value={email} onChange={(e) => setEmail(e.target.value)} />
                        {emailError && <p className="errorMsg">{emailError}</p>}
                        <label>Password</label>
                        <input className="rounded-md mt-2" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                        {passwordError && <p className="errorMsg">{passwordError}</p>}
                    </form>
                </div>
                {hasAccount ? (

                    <div className="flex flex-col w-76">
                        <button onClick={handleLogin}
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-700 hover:bg-indigo-800 mb-6"
                        >
                            Sign in
                        </button>
                        <p className="font-light">Don't have an account? <span onClick={() => setHasAccount(!hasAccount)}>Sign up</span></p>
                    </div>
                ) :

                    (<div className="flex flex-col w-56">
                        <button onClick={handleSignup}
                            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 mb-6"
                        >
                            Sign up
                        </button>
                        <p className="font-light">Have an account? <span className="font-bold hover:text-indigo-300 cursor-pointer" onClick={() => setHasAccount(!hasAccount)}>Sign in</span></p>
                    </div>
                    )}
            </div>
        </div>

    )
}
