<script>
    import TTPVote from "../components/TTPVote.svelte";
    import { isSignedIn } from '../stores.js';

    // console.log($isSignedIn);

    // function handleSignOut() {
    //     // 로그아웃 로직 수행
    //     isSignedIn.set(false);
    // }
    
</script>


<!--
<span>
    <img src="https://mmlab.snu.ac.kr/storage/app/public/theme/theme/together@together.1/d3/91/logoImage" alt="MMLAB LOGO"/>
</span>
-->
<h2>Trusted Third Party Voter</h2>
<p>by @swkang, <a href="https://mmlab.snu.ac.kr" target="_blank">SNU MMLAB</a></p>
<br/>
<!-- {#if $isSignedIn}
    <button class="btn btn-primary">Create</button>
    <button class="btn btn-primary" on:click={handleSignOut}>Sign Out</button>
{:else}
    <a href="/signin"><button class="btn btn-primary">Sign In</button></a>
{/if} -->
<div>
    <TTPVote />
</div>

