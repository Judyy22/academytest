function Create(props) {
    return (
        <article>
            <h2>Create</h2>
            <form
                onSubmit={(event) => {
                    event.preventDefault();
                    const title = event.target.title.value;
                    const body = event.target.body.value;
                    props.onCreate(title, body);
                }}
            >
                <p>
                    <input type="test" name="title" placeholder="title" />
                </p>
                <p>
                    <textarea name="body" placeholder="body"></textarea>
                </p>
                <p>
                    <input type="submit" value="Create"></input>
                </p>
            </form>
        </article>
    );
}

export default Create;