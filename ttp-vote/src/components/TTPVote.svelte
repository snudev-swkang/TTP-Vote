<script>
    // TTPVote.svelte
    let participantsNum = 0;
    let scores = [];
    let average = 0;

    function calculateAverage() {
        const sum = scores.reduce((acc, score) => acc + score, 0);
        average = sum / scores.length;
    }
</script>

<label>
    Number of Participants:
    <input type="number" inputmode="numeric" bind:value={participantsNum} min="1" />
</label>

{#if participantsNum > 0}
    <div>
        {#each Array(participantsNum) as _, i}
            <p>
                <label>
                    Score {i + 1}:
                    <input type="number" inputmode="numeric" bind:value={scores[i]} min="1" />
                </label>
            </p>
        {/each}
        <button on:click={calculateAverage}>Calculate Average</button>
        <p>Average: {average.toFixed(2)}</p>
    </div>
{/if}