const nav=()=>{
    return `<header>
    <div class="container">
        <div class="row">
            <div class="main">
                <a href="/frontend/index.html">Home</a>
            </div>
            <div class="main2">
                <div class="subrow">
                    <div class="one">
                        <a href="/frontend/pages/signup.html" id="signup">Signup</a>
                        <a href="" id="profile">UserName</a>
                    </div>
                    <div class="two">
                        <a href="/frontend/pages/login.html" id="login">Login</a>
                        <a href="" id="logout">Logout</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</header>`
}

export {nav}