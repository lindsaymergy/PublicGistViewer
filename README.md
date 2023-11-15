**description of the work completed:**
- Public gist viewer, where a user can type in a github username into the search box and view the public gists for that user. After finding a specific user's gists, you can click to view the files for each respective gist, and then return to search for another user.

**technical detail:**
- user types a word into the input
- as the user types, I build a url request with their input to an API endpoint that searches github accounts, and display the results for the user
- once an account is found, the user can select a specific gist to view details for
- I use the gist id from the gist the user selects to request the details from a separate API endpoint that searches gists by gist id, and display the results for the user
- once the user is viewing a specific gist, they can press a button to view each file in the gist
- I pull the contents of that file, to be rendered on the page without linking externally to github

**libraries used:**
- [create-react-app](https://create-react-app.dev/), as the foundational boilerplate
- [axios](https://axios-http.com/), for accessing API endpoints
- [react-router-dom](https://www.npmjs.com/package/react-router-dom), for creating routes to each page

**trade-offs made:**
- in the interest of time, I displayed the gist files inline instead of creating a separate Detail page

**assumptions made:**
- user will understand the placeholder text and know that results appear as they type, instead of looking for a submit button

**changes i would've made with more time:**
- completed the optional Favorites feature
- refactor the gist call to reference the abstracted usefetch hook that the gists call uses
- add a loading component that displays before data has returned
- style the file rendering responsively (currently overflows visible page )
- format the created_at date of a gist to MM/DD/YYYY


**what i would change, if building for production:**
- limit input to text only to avoid script injection
- add pagination for profiles with many many gists, to improve performance
- responsive styling
- ada compliance for screenreaders
- SEO tags for searchability
- displayed more details for each gist

**completed spec:**
- user can enter text into an input
- user can view gists for provided username
- user can view specific gist's details
- user can view files for a specific gist
- user can render files for a specific gist
- user can return to the search and search for a new user

**time spent in code:** 2.5 hours