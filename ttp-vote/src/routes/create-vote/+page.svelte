<!-- src/routes/create-post.svelte -->
<script>
  let title = '';
  let description = '';
  let participantsNum = 0;

  function handleSubmit() {
    // 게시글 작성 로직 구현
    console.log('Title:', title);
    console.log('Description:', description);
    console.log('Number of Participants:', participantsNum);
  }
</script>

<h1>Create Vote</h1>

<form on:submit|preventDefault={handleSubmit}>
    <p><label>
        Title:
        <input type="text" bind:value={title} />
    </label></p>
    
    <p><label>
        Description:
        <input type="text" bind:value={description} />
    </label></p>

    <p><label>
        Number of Participants:
        <input type="number" inputmode="numeric" bind:value={participantsNum} min="1" />
    </label></p>
    
    <button type="submit">Submit</button>
    <a href="/"><button>Home</button></a>
</form>