<script>
    // /signin/+page.svelte
    import { isSignedIn } from '../../stores.js';
    let password = '';
    let error = null;

    function handleSignIn() {
        // 로그인 로직 수행
        if(password=='1234') {
            isSignedIn.set(true);
            console.log($isSignedIn);
            // window.location.href = '/';

        }
        alert($isSignedIn);
    }
    
</script>

<div class="sigin-container">
    <h1>관리자 로그인</h1>
    <form class="signin-form" on:submit|preventDefault={handleSignIn}>
        <!-- <div class="form-group">
            <label for="username">아이디</label>
            <input type="text" id="username" bind:value={username} required />
        </div> -->
        <div class="form-group">
            <label for="password">Pwd</label>
            <input type="password" id="password" bind:value={password} required />
        </div>
        <button type="submit" class="btn btn-primary">Sign In</button>
    </form>
    {#if error}
        <div class="alert alert-danger">{error}</div>
    {/if}
</div>