import {
  BANANA_TALK_IMG,
  BDAY_LUCKY_IMG,
  BLOG_WEBSITE_IMG,
  CASH_REG_IMG,
  CLI_SELF_QUIZ_IMG,
  CLI_TECH_QUIZ_IMG,
  DUPLI_TOOL_IMG,
  EMOJI_IMG,
  GRACIOUS_GIVERS,
  LINKEDIN_CLONE,
  MAGNIZENT_QUIZ_IMG,
  MAGNIZENT_STORE_IMG,
  MAGNIZENT_TV_IMG,
  MAGNIZENT_UI_IMG,
  MAGNIZENT_WIRED_IMG,
  MORSE_TRANSLATOR_IMG,
  NEWSLETTER_SERVER_IMG,
  PALINDROME_IMG,
  PORTFOLIO_WEBSITE,
  STOCKS_IMG,
  TODO_LIST_IMG,
  TRIANGLES_IMG,
  VCHAT_IMG,
  WASP_IMG,
  WEBPACK_IMG,
  WEBSERIES_RECOMMEND_IMG,
} from "../../utils/imageConstants";

export const projectData = [
  {
    title: "magniZent Wired",
    description: (
      <div class="description">
        <p>
          magniZent Wired is a social media web app to stay connected with
          family, friends and your loved ones
          <br /> <br />
          Features:
          <br />
          <li>User Feed Posts</li>
          <li>Explore Posts</li>
          <li>Filter posts by latest, oldest, trending</li>
          <li>Add, Update & Delete Post</li>
          <li>Add & Delete Comment</li>
          <li>Add & remove bookmark</li>
          <li>User Profile Update</li>
          <li>Follow / Unfollow</li>
          <li>Search User using debouncing</li>
          <li>Like/unlike and Comment on Post</li>
          <li>Connection page to get details about connections</li>
          <li>User Posts in profile page</li>
          <li>Authentication: Signup, Login, Logout </li>`{" "}
        </p>
      </div>
    ),
    img: MAGNIZENT_WIRED_IMG,
    createDate: "June 2022",
    tech: "TypeScript, ReactJS, Redux, React Router v6, Tailwind, CSS, Firebase",
    githubLink: "https://github.com/Vishruta-Patil/magniZent-Wired",
    liveLink: "https://magnizent-wired.netlify.app/",
  },
  {
    title: "WASP (Web Accessibility Starter Pack)",
    description: (
      <div class="description">
        <p>
          WASP is a tool to help developers to build accessible websites and
          help them to know the importance of web accessibility
          <br /> <br />
          The tools included are :<br />
          <li class="bold-text">Colors For All</li>
          <p>
            A tool that calculates the contrast ratio of colors against a
            background to see if they are following the WCAG2 standards.
          </p>
          <li class="bold-text">Responsively</li>
          <p>
            A dev mode where users get a single glance view of their website in
            the more common screen sizes. Saves the hassle to switch between
            devices. Screenshot feat + Orientation feat included.
          </p>
          <li class="bold-text">Web metrics</li>
          <p>
            It calculates metrics of the website and displays them in
            quantifiable data. Ranks the website on Performance, SEO, and
            Accessibility. The report can be downloaded in pdf format. It can
            also see how one's website fared against other websites in the
            leaderboard section
          </p>
          <li class="bold-text">Font Pairings</li>
          <p>
            A tool that lets you select fonts that qualify for the WCAG2
            standards. It generates font combinations that are easy on the eye.
          </p>
        </p>
      </div>
    ),
    img: WASP_IMG,
    createDate: "May 2022",
    tech: "JavaScript, ReactJS, Context API, React Router v6",
    githubLink: "https://github.com/Vishruta-Patil/hack-neog",
    liveLink: "http://hack-neog.vercel.app/",
  },
  {
    title: "VanillaJs Webpack Starter",
    description: (
      <div class="description">
        <p>
          VanillaJs Webpack Starter is a tool that can be used to create a
          project using using ES6 features (including module export/import) with
          React, Caching & Code Splitting.
          <br /> <br />
          Features:
          <br />
          <li>Compilation of ES6 into ES5</li>
          <li>loaders</li>
          <li>css asset</li>
          <li>inline asset</li>
          <li>webpack plugin</li>
          <li>Code Splitting</li>
          <li>Caching</li>
          <li>Webpack dev server</li>
        </p>
      </div>
    ),
    img: WEBPACK_IMG,
    createDate: "August 2022",
    tech: "HTML, CSS, JavaScript, Webpack",
    githubLink: "https://github.com/Vishruta-Patil/VanillaJS-Webpack-Starter",
    liveLink: "https://vanillajs-webpack-starter-pack.netlify.app/",
  },
  {
    title: "DupliTool",
    description: (
      <div class="description">
        <p>
          Tool to prevent piracy and plagarism of the NCERT textbooks
          <br /> <br />
          Features:
          <br />
          <li>Watermark detection</li>
          <li>Detect the length and width of the book</li>
          <li>Detect barcode of the book </li>
          <li>Book cover detection</li>
          <li>Plagarism detection</li>
          <li>Authentication - Sign up, Login, Logout</li>
        </p>
      </div>
    ),
    img: DUPLI_TOOL_IMG,
    createDate: "August, 2022",
    tech: "ReactJS, Flask, Firebase, Context API, React Router v6",
    githubLink: "https://github.com/Vishruta-Patil/Binary-Brains",
    liveLink: "",
  },
  {
    title: "magniZent Store",
    description: (
      <div class="description">
        <p>
          magniZent Store is an eCommerce web app that has different categories
          like fashion, jewellery and home <br /> <br />
          Features:
          <li>Home Page with different categories</li>
          <li>Product Listing Page</li>
          <li>Sort & Filter Products by - Price, Category, Ratings</li>
          <li>Cart Management</li>
          <li>Wishlist Management</li>
          <li>Authentication - Sign up, Login, Logout</li>
        </p>
      </div>
    ),
    img: MAGNIZENT_STORE_IMG,
    createDate: "February 2022",
    tech: "ReactJs, Nodejs, Express, MongoDB, Context API, React Router v6",
    githubLink: "https://github.com/Vishruta-Patil/magniZent-Store-react",
    liveLink: "https://magniZent-store-react.netlify.app/",
  },
  {
    title: "magniZent TV",
    description: (
      <div class="description">
        <p>
          magniZent TV is the perfect platform for astrophile to watch unlimited
          Astronomy, Space and Universe related videos <br /> <br />
          Features:
          <br />
          <li>Home Page</li>
          <li>Video Listing Page</li>
          <li>Playlist Management</li>
          <li>Like/Dislike</li>
          <li>Watch Later</li>
          <li>History</li>
          <li>Authentication - Sign up, Login, Logout</li>
        </p>
      </div>
    ),
    img: MAGNIZENT_TV_IMG,
    createDate: "March, 2022",
    tech: "ReactJs, Nodejs, Express, MongoDB, Context API, React Router v6",
    githubLink: "https://github.com/Vishruta-Patil/magniZent-tv",
    liveLink: "https://magniZent-tv.netlify.app/",
  },
  {
    title: "magniZent Quiz",
    description: (
      <div class="description">
        <p>
          A Quiz Web Application based on Technology, Sports, Astronomy
          <br /> <br />
          Features:
          <br />
          <li>Home Page</li>
          <li>Quizzes by Category</li>
          <li>MCQ based Quiz Question Page</li>
          <li>Timer for Quiz Questions</li>
          <li>Quit Quiz</li>
          <li>Result Page with Answers & Score</li>
          <li>Authentication - Sign up, Login, Logout</li>
          <li>Unit testing for API calls and reducer using Jest</li>
        </p>
      </div>
    ),
    img: MAGNIZENT_QUIZ_IMG,
    createDate: "June, 2022",
    tech: "TypeScript, ReactJS, Context API, React Router v6, Firebase, Jest",
    githubLink: "https://github.com/Vishruta-Patil/magniZent-Quiz-react",
    liveLink: "https://magniZent-quiz-react.netlify.app",
  },
  {
    title: "magniZent UI",
    description: (
      <div class="description">
        <p>
          {" "}
          magniZent UI is a simple, robust and customizable component library
          that enables you to build your design system and develop web
          applications faster. <br /> <br />
          Components:
          <div style={{display:"flex", gap: "80px", marginLeft: "20px"}}>
            <ol>
              <li>Alert</li>
              <li>Avatar</li>
              <li>Badge</li>
              <li>Button</li>
              <li>Navigation</li>
              <li>Snackbar</li>
              <li>Image</li>
              <li>Typography</li>
            </ol>

            <ol start="9">
              <li>List</li>
              <li>Modal</li>
              <li>Card</li>
              <li>Rating</li>
              <li>slider</li>
              <li>Grid</li>
              <li>Image</li>
            </ol>
          </div>
        </p>
      </div>
    ),
    img: MAGNIZENT_UI_IMG,
    createDate: "July, 2021",
    tech: "HTML, CSS, JavaScript",
    githubLink: "https://github.com/Vishruta-Patil/magniZent-UI",
    liveLink: "https://magniZent-ui.netlify.app/",
  },
  {
    title: "VChat App",
    description: (
      <div class="description">
        <p>
          VChat App is a Realtime Chat Application.
          <br /> <br />
          Features:
          <br />
          <li> VChat allows user to have a group chat.</li>
          <li>
            {" "}
            There is a feature of chat room where users can chat different
            topics in the specific room.
          </li>
          <li> Display the names of participant in the group chat</li>
          <li>Display the group name of the group chat</li>
          <li>Users are updated if someone has joined or left the group</li>
          <li>Welcome message is displayed to the new user.</li>
          <li>Timestamps on the messages.</li>
        </p>
      </div>
    ),
    img: VCHAT_IMG,
    createDate: "April, 2021",
    tech: "HTML, CSS, JavaScript, Nodejs, Express, Socket.IO, Momentjs",
    githubLink:
      "https://github.com/Vishruta-Patil/VChat-App---Realtime-Chat-Application",
    liveLink: "https://vchat-chat-application.herokuapp.com/",
  },
  {
    title: "Gracious givers",
    description: (
      <div class="description">
        <p>
          {" "}
          Donation website - Gracious Givers reduce the gap between the people
          who are willing to help and the people who are searching for such
          volunteers.
          <br />
          Features:
        </p>

        <li>Accepting donation amounts.</li>
        <li>
          {" "}
          Sending confirmation reciept to the donor through email instantly.
        </li>
        <li> Notifying the amount of donation to the organization.</li>
        <li>
          Updating needy people regarding the services provided by the
          organization.
        </li>
        <li> Awaring the society to help the underprivileged group.</li>
      </div>
    ),
    img: GRACIOUS_GIVERS,
    createDate: "May, 2021",
    tech: "HTML, SCSS, EJS, JavaScript, Nodejs, Express",
    githubLink: "https://github.com/Vishruta-Patil/Gracious-Givers",
    liveLink: "https://gracious-givers.herokuapp.com/",
    youtubeLink: "https://www.youtube.com/watch?v=Ak5G6cwAync",
  },
  {
    title: "LinkedIn Clone",
    description: (
      <div class="description">
        <p>
          {" "}
          LinkedIn is a career-based social networking platform.
          <br />
          Features:
        </p>

        <li>Login using Google (Firebase Authentication)</li>
        <li>Create a new post.</li>
        <li>Share photos and videos (React player for videos)</li>
        <li>Like posts</li>
        <li>Realtime update likes and posts</li>
        <li>Auto authenticate user on refresh</li>
        <li> Sign Out</li>
      </div>
    ),
    img: LINKEDIN_CLONE,
    createDate: "February 2022",
    tech: "React JS, Redux, Firebase & Styled-Components",
    githubLink: "https://github.com/Vishruta-Patil/LinkedIn-Clone",
    liveLink: "https://linkedinclonevis.herokuapp.com/",
    youtubeLink: "https://www.youtube.com/watch?v=cV8dvl2RZF8",
  },
  {
    title: "Portfolio Website",
    description: (
      <div class="description">
        <p>
          magniZent Store is an eCommerce web app that has different categories
          like fashion, jewellery and home <br /> <br />
          Features:
          <li>Home Page with different categories</li>
          <li>Product Listing Page</li>
          <li>Sort & Filter Products by - Price, Category, Ratings</li>
          <li>Cart Management</li>
          <li>Wishlist Management</li>
          <li>Authentication - Sign up, Login, Logout</li>
        </p>
      </div>
    ),
    img: PORTFOLIO_WEBSITE,
    createDate: "July 2021",
    tech: "HTML, CSS, JavaScript",
    githubLink: "https://github.com/Vishruta-Patil/Portfolio-Website",
    liveLink: "http://vishrutapatil.netlify.app",
  },
  {
    title: "Stocks - Profit or Loss",
    description: (
      <div class="description">
        <p>
          {" "}
          Stock - Profit or Loss : The stocks calculator to calculate amount of
          profit or loss on a stock.
        </p>
      </div>
    ),
    img: STOCKS_IMG,
    createDate: "August, 2021",
    tech: "HTML, CSS, JavaScript",
    githubLink: "https://github.com/Vishruta-Patil/Stock-Profit-or-Loss",
    liveLink: "https://stock-profit-or-loss.netlify.app",
  },
  {
    title: "Is Your Birthday Lucky ?",
    description: (
      <div class="description">
        <p>
          {" "}
          Is Your Birthday Lucky - Web app to check if your B'Day is lucky or
          not. It is checked against the lucky number which user has enterd. Do
          checkout this fun app to find if your day is lucky or not.
        </p>
      </div>
    ),
    img: BDAY_LUCKY_IMG,
    createDate: "August, 2021",
    tech: "HTML, CSS, JavaScript",
    githubLink: "https://github.com/Vishruta-Patil/Is-Your-Birthday-Lucky",
    liveLink: "https://is-ur-birthday-lucky.netlify.app",
  },
  {
    title: "Cash Register Manager",
    description: (
      <div class="description">
        <p>
          {" "}
          Cash Register Manager - Web app to find minimum number of notes to
          return for the bill amount. User has to enter the bill amount and cash
          given by the customer to find the amount of change.
        </p>
      </div>
    ),
    img: CASH_REG_IMG,
    createDate: "August, 2021",
    tech: "HTML, CSS, JavaScript",
    githubLink: "https://github.com/Vishruta-Patil/Cash-Register-Manager",
    liveLink: "https://cash-register-manager-neogcamp.netlify.app",
  },
  {
    title: "Banana Talk",
    description: (
      <div class="description">
        <p>
          {" "}
          Banana Talk - Translator web app to convert english language to banana
          language. Check out this app to talk with minions.
        </p>
      </div>
    ),
    img: BANANA_TALK_IMG,
    createDate: "August 2021",
    tech: "HTML, CSS, JavaScript",
    githubLink: "https://github.com/Vishruta-Patil/Banana-Talk",
    liveLink: "https://talk-with-minions.netlify.app/",
  },
  {
    title: "EmojiPedia - Home Of Emoji",
    description: (
      <div class="description">
        <p>
          {" "}
          EmojiPedia - Web app which finds the meaning of the emoji by clicking
          on emoji or serching emoji in the search box. Built uing Reactjs.
        </p>
      </div>
    ),
    img: EMOJI_IMG,
    createDate: "August, 2021",
    tech: "HTML, CSS, JavaScript, Reactjs",
    githubLink: "https://github.com/Vishruta-Patil/Emoji-Interpreter",
    liveLink: "https://emojipedia-home-of-emojis.netlify.app/",
  },
  {
    title: "Birthday Palindrome",
    description: (
      <div class="description">
        <p>
          {" "}
          Birthday Palindrome - App checks whether the birthday is Palindrome.
          If birthaday is not palindrome then it find nearest palindrome date
          and also finds the number of days it missed from the palindrome date.
        </p>
      </div>
    ),
    img: PALINDROME_IMG,
    createDate: "August 2021",
    tech: "HTML, CSS, JavaScript",
    githubLink: "https://github.com/Vishruta-Patil/Birthday-Palindrome",
    liveLink: "https://birthday-palindrome-neogcamp.netlify.app/",
  },
  {
    title: "Fun with Triangles",
    description: (
      <div class="description">
        <p>
          {" "}
          Fun with Triangles - Web App finds area,hypotenuse of triangle. Also
          check whether the triangle is valid or not. There is also the fun quiz
          to check your knowledge in triangle. Do test Your knowledge in
          Triangle through this web app.
        </p>
      </div>
    ),
    img: TRIANGLES_IMG,
    createDate: "August, 2021",
    tech: "HTML, CSS, JavaScript",
    githubLink: "https://github.com/Vishruta-Patil/Fun-With-Triangle",
    liveLink: "https://fun-with-the-triangle.netlify.app/",
  },
  {
    title: "Web Series Recommender",
    description: (
      <div class="description">
        <p>
          {" "}
          Web Series Recommender - Web app which recommends web series of
          different genres. Built using Reactjs
        </p>
      </div>
    ),
    img: WEBSERIES_RECOMMEND_IMG,
    createDate: "July, 2022",
    tech: "HTML, CSS, JavaScript, Reactjs",
    githubLink: "https://github.com/Vishruta-Patil/Web-Series",
    liveLink: "https://5spb2.csb.app/",
  },
  {
    title: "Morse code Translator",
    description: (
      <div class="description">
        <p>
          {" "}
          Morse Code Translator - Translator to convert english language into
          morse code.
        </p>
      </div>
    ),
    img: MORSE_TRANSLATOR_IMG,
    createDate: "July, 2021",
    tech: "HTML, CSS, JavaScript",
    githubLink: "https://github.com/Vishruta-Patil/Morse-Code-Translator",
    liveLink: "https://morse-code-interpreter.netlify.app/",
  },
  {
    title: "CLI - Tech Quiz",
    description: (
      <div class="description">
        <p>
          CLI : Tech Quiz - A quiz puzzle built using Nodejs to test your
          knowledge in emerging technology. Do play the quiz to check your
          knowledge in current technology.
        </p>
      </div>
    ),
    img: CLI_TECH_QUIZ_IMG,
    createDate: "June, 2021",
    tech: "HTML, CSS, JavaScript, NodeJS.",
    githubLink: "https://github.com/Vishruta-Patil/CLI-Tech-Quiz",
    liveLink: "https://replit.com/@VishrutaPatil/Tech-Quiz?embed=1&output=1",
  },
  {
    title: "How Well Do You know Me - CLI APP",
    description: (
      <div class="description">
        <p>
          {" "}
          How Well Do You know Me - A quiz puzzle built using Nodejs to test how
          well your friends know about you. You can play this puzzle to know me
          better.
        </p>
      </div>
    ),
    img: CLI_SELF_QUIZ_IMG,
    createDate: "June, 2021",
    tech: "HTML, CSS, JavaScript, NodeJS.",
    githubLink: "https://github.com/Vishruta-Patil/CLI-Quiz-Do-You-Know-Me",
    liveLink:
      "https://replit.com/@VishrutaPatil/CLI-Do-u-know-me?embed=1&output=1",
  },
  {
    title: "Newsletter server",
    description: (
      <div class="description">
        <p>
          magniZent Store is an eCommerce web app that has different categories
          like fashion, jewellery and home <br /> <br />
          Features:
          <li>Home Page with different categories</li>
          <li>Product Listing Page</li>
          <li>Sort & Filter Products by - Price, Category, Ratings</li>
          <li>Cart Management</li>
          <li>Wishlist Management</li>
          <li>Authentication - Sign up, Login, Logout</li>
        </p>
      </div>
    ),
    img: NEWSLETTER_SERVER_IMG,
    createDate: "February, 2021",
    tech: "HTML, CSS, Node.js ,Express.js",
    githubLink: "https://github.com/Vishruta-Patil/NewsLetter-Signup",
    liveLink: "",
  },
  {
    title: "Blog Website",
    description: (
      <div class="description">
        <p>
          Blog website can be used as a daily journal for individual or as a
          group of people to present information as a blog content, often
          referred as entries or “blog posts”. Blog website allows user to
          compose blogs and publish them in the website with a title and post.
          Learned about implementation of backend and frontend with the
          database.
        </p>
      </div>
    ),
    img: BLOG_WEBSITE_IMG,
    createDate: "February, 2021",
    tech: "NodeJS, Express, EJS, MongoDB",
    githubLink: "https://github.com/Vishruta-Patil/Blog-Website",
    liveLink: "",
  },
  {
    title: "To Do List",
    description: (
      <div class="description">
        <p>
          To do list app provides user to add the to-do tasks. It has a feature
          of checking the tasks after completion. It gives the clear view of
          completed and remaining tasks. Added items get saved in database and
          completed tasks can be deleted from database by checking tick the task
          Implemented using NodeJS, ExpressJS, MongoDB.
        </p>
      </div>
    ),
    img: TODO_LIST_IMG,
    createDate: "March,2021",
    tech: "NodeJS, ExpressJS, MongoDB",
    githubLink: "https://github.com/Vishruta-Patil/To-Do-List-App",
    liveLink: "",
  },
];
