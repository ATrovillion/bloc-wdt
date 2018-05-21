## Questions

>What are the typical Agile team roles?
>What parts of the development lifecycle is each role responsible for?
* The typical Agile team roles are: Product Manager, Project Manager, Designer, User Researcher, Team Lead, and Developers.
    * The **Product Manager** is also called the **Product Owner** at times. S/he is charged with strategy, roadmap, and feature definition of the product or product line.
    * The **Project Manager** is charged with management of the process and on-time delivery of a product team or teams.
    * The **Designer** is tasked with the look and feel of a product. They create models and interactions for the product.
    * The **User Researcher** has as his/her portfolio understanding user. This understanding encompasses user behavior, wants, needs, and priorities.
        * *User Researchers* run tests and create *personas*, which profile a target user.
    * The **Team Lead** is the technical manager, director, and quality-control checker for a project.
    * The **Developer** is the technical creator, maintainer, and integrity checker for the product.


>What is a Kanban board?
* A Kanban board is a productivity tool organized into columns and cards. Kanban boards for technical product teams usually consist of *Backlog*, *Committed*, *Blocked*, *In Progress*, *In Test*, *Deployed* and *Approved* columns.

>Why do we use a Kanban board in Agile development?
* Kanban boards are a great way to stay organized in general. Specifically with regard to Agile development, Kanban boards do a great job of breaking larger tasks into smaller bites/tasks that can be assigned and tracked. Kanban boards are also great at categorizing the work, which means that a complex system can be clearly delineated in an easily consumable way.
* Kanban boards have the additional benefit of being able to support multiple, contemporaneous work streams.

>Explain velocity, sprint, user story, card, and agile as if you were teaching another student. Give a real-world example for each.
* **Velocity** is a measure of work to be completed within a period of time. Velocity is measured in terms of *points*, and is used to delineate how many units of work a team commits to completing in a time period. Because of this, velocity is also a measure of team capacity.
* **Sprint**, as contemplated in the context of Agile Development, is the basic temporal unit of the team's work. The sprint cycle includes a series of meetings determined by the needs and goals of the team.
    * _Example:_ Agile team is beginning a new sprint.
* **User Stories** are the way Agile Development talks about functionality. User stories are presented in a way that discusses what a particular stakeholder wants to be able to do with the product. In this way, features are described from the perspective of a person who desires a new capability.
* _Example:_  Agile team is working on an interation, planning to complete two user stories, A and B, that discuss what a user would be able to do with the product if a particular feature were to be added. Each of these stories is estimated at 2 points each. Story C, the third story, is estimated at 3 points. If at the end of the sprint the team has completed 100% of stories A and B, but C is only 80% complete, the team's velocity is 4 points for that iteration, as Agile teams generally only count two levels of completion, 0% and 100% done. Thus, C is not counted toward the team's velocity for that iteration.

>What are different estimation methods teams can use? Explain pros and cons of each method. Which method would you prefer?
* Teams can use cards, group discussions, or online tools like Scrum Poker to estimate.
* I like the anonymity of Scrum Poker. It seems like a democratic way to handle the estimation process.

>Explain the difference between tasks, cards, stories, slices, and epics, as if you were teaching another student. Give a real-world example of a development project, and explain the breakdown of pieces into each type.
* **Tasks**: are all the items on a card that must be done to complete it.
* **Cards**: the smallest unit of work providing value to a user.
* **Stories**: statements by a user about what s/he would be able to do with a particular feature.
* **Slices**: work can be further broken down into these smaller portions/problems to be done in layers (horizontal) or to be done through several layers (vertical).
* **Epics**: made up of projects that can be further broken down into the other pieces mentioned previously.
* **Example**: we want to add a new shopping cart functionality to our website. This could be written up as a story. This sort of function would be an epic that could be split further into other slices, such as accounts, page front, page behind, etc. These slices would then further be broken down into cards.

>What format makes a good user story?
* User stories usually follow the format: "As a <some type of user>, I want <some goal> so that <some reason>.

>What elements should a card include?
* Cards should include an estimation, user story, tasks, epic, and any othe relevant details.
* What a specific card includes will depend on the type of card, which could be spike, bug, feature, or technical item.

>How does an idea go from conception to production?
* **Conception**: projects are envisioned and prioritized.
* **Inception**: team members are allocated, funding is secured, and environments and requirements are discussed.
* **Iteration/Construction**: Development team works to deliver software/product based on requirements and feedback.
* **Release**: QA testing, internal and external training, documentation development, and final release into production
* **Production**: ongoing support

>Why do development teams use Kanban boards?
* Kanban boards are efficient ways of managing workflow by visually representing the current system of work scheduling. Current work in progress is effectively and precisely inventoried, which allows constant monitoring and adjustment. Kanbans also allow for allocation of resources to one crucial task that is blocking thet team's ability to continue; in that case, the team members can swarm to help those team members who are currently working on the activity that's blocking flow.

>What is the purpose of estimation?
* Estimation is meant to quantifiably evaluate the effort necessary to carry out a development task. This estimation is carried out through aggregation of several individual estimates.

>What is the sprint cycle?
* Meetings including: prioritization, estimation, planning, review, and retrospective. Prioritization, estimation and planning occur before the beginning of the sprint. Review and retrospective occur at the end.

>What could go wrong when estimating cards? How would you mitigate these risks?
* Everybody could be wrong. Also, anchor bias could come into play in a discussion. To avoid this problem, options like cards or something like Scrum Poker can be used.

>Imagine you are looking to lease a new apartment. Write each card that would be in the apartment lease epic. Estimate each card. What columns would you need to have on your Kanban board?
* "As a grownup, I want to live in my own apartment so that I can have some privacy."
* Columns: Planning and research, finance and reference, legal, communication.
* Cards (estimated by t-shirt sizing):
    * Develop rent budget--S
    * Call to secure references for financing.--M
    * Research areas appropriate for work/school/preferences.--M
    * Determine size of apartment necessary.--M
    * Develop range of needs/wants to look for in apartment.--S
    * Research apartments available in price range and areas that have necessary requirements.--M
    * Call for appointments to view apartments or to check availability.--S
    * Visit available apartments that fit needs/budget/location.--M
    * Select best apartment based on needs/budget/location.--M
    * Fill out application/forms.--S
    * Review lease for problematic clauses.--M
    * Sign lease--S
    * Party!!!


>Imagine you are creating a nursery for a new baby. Write each card that would be in this epic. Estimate each card. What columns would you need to have on your Kanban board?
* "As a parent, I want my baby to have a beautiful nursery so she grows up to be a doctor."
* Columns: planning and research, finance and reference, sourcing
* Cards (estimated by t-shirt sizes):
    * Choose a room in the house for baby's nursery.--s
    * Clean out room--m
    * Develop renovation budget--m
    * Research room colors and patterns--m
    * Research furniture and accessories==m
    * Decide on color scheme and patterns--m
    * Decide on furniture and accessories--m
    * Go to store to purchase paints, brushes, painting paraphernalia.--s
    * Paint empty room.--l
    * Go to store to purchase furniture and accessories.--m
    * Assemble furniture in the new nursery.--l
    * Decorate room with accessories.--l
    * Have a baby.--XXXXL

>Imagine you are planning a vacation. Write each card that would be in this epic. Estimate each card. What columns would you need to have on your Kanban board?
* "As a parent, I want to have a vacation so I don't have a psychotic break."
* Columns: planning and research, finance and reference, activities
* Cards (estimated by t-shirt sizes):
    * Identify available funds and time off for vacation.--m
    * Research possible vacation locales.--m
    * Select destination based on budget and preferences.--m
    * Research and identify appropriate flights based on destination and budget.--l
    * Purchase airline flights.--m
    * Research lodging.--m
    * Call/use internet to secure lodging at destination.--m
    * Research activities to be done at destination.--m
    * Research necessary items for trip based upon location and time of year for travel.--m
    * Research currency and means of payment needs.--s
    * Reserve activity space/tickets.--l
    * Purchase additional items necessary for travel.--m
    * Secure appropriate currency/means of payment.--s
    * Pack suitcases/bags for travel.--l
    * Travel


>What is an MVP?
* MVP is the version of a new product that allows a team to collect the maximum amount of validated learning about customers with the least effort.

>Explain in your own words what a dual-track system is and what advantages it provides.
* A dual-track system bifurcates the design (Discovery) and development (Delivery) functions.
* The benefit of this system is that it allows concurrent work streams in which both teams can continue to work without having to wait for the other.

## Project
* Create a Trello board for a Hacker News clone.
    * Link to Hacker news clone board: https://trello.com/b/8NDtLFER
* Create user stories for each feature.
    * As a news consumer, I want the biggest tech stories of the day so I can stay up to date.
    * As an internet user, I want a visually pleasing site so I will want to stay a while.
    * As  an internet user, I want a site with clear navigation so I know what options are available to me.
* Break the work into slices and epics as needed.
* Estimate your cards.
* Explain what estimation methods you used.
    * Used t-shirt sizes for estimation.