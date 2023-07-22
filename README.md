# WikiWorld
Design details
Version Alpha will be built using the MEAN stack, in JS/TS. 
This will later be overhauled to C++/SFML for performance when rendering becomes important.

DRAFT AREA

PRE GAME FEATURES 

In order to reduce duplicate articles through linguistic ambiguity, only the infinitive or noun form of a term should be documented (I.E. heart, cardiac, cardiology, and cardio should all link back to heart. Also terms which can be classified as both adjectives, nouns and/or verbs should be reduced. Carry vs carried contains the regular expression carr so must be recognized by )


GAME MECHANICS
When a user enters the website/app, they will be prompted to make an account or proceed as guest (read only, no progress or paths saved). Their account will contain:(pages visited and # of times visited, paths, skills/items earned, character class, friends, character design, messages, notifications, recommended readings)

ARCHITECTURE
Backend
    Links/nodes
        [NODE WEB SCRAPER](http://www.digitalocean.com/community/tutorials/how-to-scrape-a-website-using-node-js-and-puppeteer)
            Start with list of 12 seeds according to academic disciplines, index all other links/pages by steps removed from seed(s). Similar to hierarchical graph/tree but allows for cross connections
        [Store links as JSON](https://stackoverflow.com/questions/43052290/representing-a-graph-in-json)
    Pages/tags
        By common words (Push every word into array, sort, reduce duplicates and irrelevant words, compare arrays and if is found increment similarity calculator. Similarity determines connection force.)
        GUI NOTE(If page is not directly linked still display hover over brightness/saturation)
        OPTIONAL (use scraper to get topical lists of tags from https://relatedwords.org/relatedto/computer)
        Keyword tag association
            Primary academic field
            Subfield 
            Topic
    “Tubes” auto sort
    Image recognition autonamer 
    [Wiztree file visualizer](https://observablehq.com/@d3/sunburst/2?intent=fork)
    Every page should have 
        1. Name
        2. Description
        3. Abstract 
        4. Article
        5. Comprehensive Resource
Frontend
    GUI 1
        Obsidian as temporary front end, static map later
    GUI 2 
        Graph visualizer 
            [Force directed graph/tree](https://observablehq.com/@d3/force-directed-graph)(https://observablehq.com/@d3/force-directed-tree)
            Quadtree based rigid rendering
    GUI 3 
        Exploration game
        The most sensible way to track a person's progress would be to implement a modular khan academy style open source learning paths where each topic is de-contextualized and connected to all it neighbors. For instance, the topic of polymers could be approached from the bottom through organic chemistry, from the top through materials engineering, needing no linear hierarchy, only an anchor point.  
    GUI 4
        Building a ship
            Tiny galaxies/maps
            Characters
            Items: as representations of learned skills
                Concepts are armor, laws/ formulas are weapons
                Item/skill trees allow combination terraria style
            enemies ranked by distance from seed, I.E. (a link which is 4 clicks away from Math would be labeled a level 4 math enemy)
                Problems / ideas are enemies
                solve order is  multiple choice→fill in the blank→ recall→ automatic kill
                Cooldown is added for spaced repitition
                Damage determined by speed of solve
                boss battles are quizzes and exams
    
    Flat image with hoverable nodes as domains
    Adorn with biome features (mountains, rivers etc)
    Force directed tree with circle round groups, by opacity according to distance from root
    Quadtree demo rendering
   
    GUI 2 
    Quadtree
    [Obsidian rigid node ext](https://www.youtube.com/watch?v=GUtXbwqS3iQ)
    [Grouping with d3.pack](https://github.com/d3/d3-hierarchy/blob/main/README.md#pack)
