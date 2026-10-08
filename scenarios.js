// Passage scenarios. Each passage is built from one scenario: one variant of
// each section, placeholders filled per difficulty, plus a generated header.
// Edit by hand, then run: node tools/validate-scenarios.js
const SCENARIOS = [
  {
    "id": "a01-library-renovation",
    "kind": "notice",
    "title": "Library branch closing for roof and HVAC renovation",
    "orgs": [
      "{city} Branch, Island Shores Regional Library",
      "Mid-Island Library Cooperative"
    ],
    "senderTitles": [
      "Branch Manager",
      "Community Librarian",
      "Facilities Coordinator"
    ],
    "subjects": [
      "Branch closing for renovation from {date}",
      "Temporary pickup during library roof work"
    ],
    "sections": [
      [
        "The {city} branch will close to the public on {date} so crews can replace the roof and the heating and ventilation system. The building is more than forty years old, and the flat roof has leaked into the children's area twice since last spring. We know many of you visit every week, and we have planned the closure to keep books moving to your hands.",
        "Starting {date}, the library at {street} will be closed while the old tar-and-gravel roof comes off and new air handling units go in. Staff have been chasing drips with buckets and plastic sheeting for two winters now, and the furnace in the basement is older than most of our teen volunteers. This work is overdue, and we are glad it is finally funded."
      ],
      [
        "Our contractor, {company}, expects the job to take about {number} weeks if the weather cooperates. Roofing on Vancouver Island always depends on a dry stretch, so we will post updates on the front doors and on our website rather than promise a firm reopening date today. If the schedule changes, regular borrowers will also receive a short email.",
        "The renovation is being done in two stages. First the roof deck will be stripped, inspected for rot and covered with new insulation and membrane. Then the rooftop units and ductwork will be replaced, which means cranes in the parking lot on several mornings. Because of the dust and the noise, the building cannot stay open even partly during the work."
      ],
      [
        "While the doors are closed, holds will not stop. You can still place requests online or by phone, and items will be sent to a temporary pickup desk at the {city} Recreation Centre on {street2}. The desk will be staffed by library workers you already know, so feel free to ask them for reading suggestions while you are there.",
        "Holds placed during the closure will be routed to a pop-up counter in the lobby of the community hall on {street2}. The counter will open three afternoons a week and on Saturday mornings. Bring your library card or a photo ID, and staff will find your items on the shelf behind the counter. Returns can be dropped off at the same spot."
      ],
      [
        "The outdoor book drop at the branch will be sealed during construction, because it sits right where the roofing crew needs to set up a material chute. Please do not leave bags of books by the front steps. Anything returned to the wrong place may be damaged by rain or swept up with debris, and we would rather see it come back safely.",
        "Please hold on to your returns or bring them to the temporary desk. The slot in the front wall will be taped over from {date}, and the bin behind it will be moved to storage. Due dates for everything checked out before the closure have been pushed back automatically, so nobody will pay a late charge for items they cannot return."
      ],
      [
        "Some services will pause entirely. Public computers, the printer and the meeting room will not be available, and the seed library will move to the garden centre on the highway until reopening. Patrons who need a computer for job applications or government forms can use the terminals at the {city2} branch, which has added extra evening hours.",
        "A few programs are moving rather than stopping. Toddler storytime will run in the multipurpose room at the recreation centre, and the Thursday knitting circle has found a home at the seniors centre. Tax clinic appointments that were booked at the branch will be held across the street at the church hall, and volunteers will call each client to confirm the change."
      ],
      [
        "Homebound delivery will carry on as usual. If you already receive books by volunteer driver, your next bag will arrive on the normal day. If you are recovering from surgery or cannot get to the temporary desk for another reason, call us at {phone} and we will see whether a short-term delivery arrangement can be added for the length of the closure.",
        "Our e-book and audiobook collections are open all day, every day, and we have bought extra copies of the most popular titles to shorten wait lists. Staff will run two drop-in sessions to help people set up the library app on a phone or tablet. Bring your device, your card number and your PIN, and we will walk you through it."
      ],
      [
        "When the branch reopens, you will notice quieter heating, fresh air in the study carrels and no more stained ceiling tiles above the picture books. The new roof also has stronger anchors for future solar panels, which the regional board is considering for a later phase. We hope the result is a brighter, more comfortable building for the next forty years.",
        "The finished building should be cheaper to heat and much more pleasant in July, when the old system struggled to cool the second floor. The renovation also adds a proper ventilation fan to the staff workroom and replaces cracked skylights over the reading lounge. We think the short-term disruption will be worth it for years of steady, dry use."
      ],
      [
        "Thank you for your patience while the work is done. Questions about holds, fines or programs can go to {email}, and a staff member will reply within two business days. Updates on the reopening date will be posted at the temporary desk and shared with the community association newsletter as soon as the contractor confirms the final inspection.",
        "We appreciate how many people have already offered to help, from lending book carts to spreading the word on social media. If you have a question we have not answered here, stop by the pickup desk or phone the branch line. We will celebrate the reopening with a small open house, and everyone who waited along with us is invited."
      ]
    ],
    "details": [
      "Holds placed before {date} will remain active; anything with a status of \"in transit\" will be redirected to the temporary desk at {street2}, and patrons can confirm the change by calling ext. 214 at {phone}.",
      "The roofing contract (file {ref}) was awarded to {company} for approx. {amount}, with a separate mechanical contract to {company2} covering two rooftop units, new ductwork and a heat-recovery ventilator.",
      "Temporary desk hours at {street2} are Tuesday, Thursday and Friday from {time} to {time2}, plus Saturday mornings; the desk is closed on statutory holidays, e.g. Thanksgiving Monday and Remembrance Day.",
      "Due dates for approx. {bignumber} items currently on loan were extended to {date2}; patrons who receive an overdue notice by mistake should forward it to {email} and quote their card No. for a correction.",
      "{p1}, the branch manager, said the leak over the \"Picture Book Corner\" was traced to a failed scupper, and that {p1_he} expects the crew from {company} to start tear-off within days of {date}.",
      "Parking at {street} will be restricted from {date} to {date2} while a mobile crane lifts the new units; cyclists should use the rack beside the recreation centre instead (approx. {km} away by the river path).",
      "Seed library packets, including heritage beans and \"Saanich Gold\" tomatoes, will be available at the {city2} garden centre on Highway 19A from {date} until reopening, with a limit of {number} packets per household.",
      "According to the facilities report (ref. {ref2}), the existing furnace dates to 1983; the replacement system should cut heating costs by roughly {percent} and will be monitored remotely by {company2}."
    ]
  },
  {
    "id": "a02-garden-plots",
    "kind": "letter",
    "title": "Community garden plot allocation and tool shed follow-up",
    "orgs": [
      "{city} Community Garden Society",
      "Oak Bay Lane Allotment Collective"
    ],
    "senderTitles": [
      "Plot Coordinator",
      "Garden Society Secretary",
      "Volunteer Chair"
    ],
    "subjects": [
      "Your garden plot for the {date} season",
      "Plot assignment and shed update, file {ref}"
    ],
    "sections": [
      [
        "I am pleased to tell you that your application for a garden plot has been approved for the coming season. We had far more requests than space this year, so the committee drew names at the February meeting and worked down the waiting list. Your name came up early, and you have been assigned a raised bed near the south fence.",
        "Thank you for renewing with the society again this year. The allocation committee met last week, sorted through every renewal form and the new applications, and matched gardeners to plots. You will keep a full-size in-ground plot in the lower terrace, which gets sun from mid-morning until the cedars shade it late in the day."
      ],
      [
        "Your plot number and a rough map are enclosed. Each bed is marked with a painted stake at the northeast corner, and the paths between beds must stay clear for wheelbarrows and for gardeners who use walkers. Please do not move the stakes or widen your bed into the path, even by a few centimetres, since it affects your neighbours.",
        "The annual fee of {amount} is due by {date}. You can pay by cheque at the potting bench drop box, by e-transfer, or in cash at the spring work bee. Gardeners on a fixed income can ask about our reduced rate in confidence. Plots that are not paid for by the deadline will be offered to the next person on the waiting list."
      ],
      [
        "Water rules have changed slightly this year because the municipality has asked all community gardens to cut summer use. Hand watering with a can or a hose with a shut-off nozzle is fine at any time. Sprinklers and soaker hoses left running are no longer allowed, and the main valve will be locked between eleven at night and five in the morning.",
        "The water supply will be turned on at the end of April, once the risk of frozen pipes has passed. During dry spells, please water early in the morning or in the evening so less is lost to evaporation. Unattended sprinklers are not permitted. If you see a leaking tap or a split hose, tell a coordinator rather than trying to repair it yourself."
      ],
      [
        "We also need to follow up on the break-in at the tool shed over the winter. Someone pried the hasp off the door and took two gas trimmers, a wheelbarrow and several pairs of loppers. Nothing belonging to individual members appears to have been taken, but the shared tools are gone and the door frame was badly split.",
        "As some members already know, the tool shed was broken into during the cold snap in January. The padlock was cut, and the thieves removed a rototiller, a set of long-handled shovels and the society's only working hose reel. A neighbour on {street} noticed the open door the next morning and called one of our coordinators right away."
      ],
      [
        "The incident was reported to the RCMP, and the officer who attended suggested better lighting and a sturdier lock. The board has since installed a motion-sensor light over the door and replaced the hasp with a heavy steel bar. The insurance claim covered most of the loss, though our deductible came out of the maintenance fund.",
        "We filed a police report and an insurance claim, and the replacement tools should arrive before the first work bee. The shed now has a keypad lock, and the code will be given only to paid members. Please do not share it with friends or family. If you need to lend someone a tool, meet them at the gate and stay with them."
      ],
      [
        "Your shed code will be sent separately by text once your fee is received. We ask that every member sign tools in and out on the clipboard inside the door. It is a small habit, but it helps us notice quickly if something goes missing, and it reminds people to bring back the good pruners before the next person needs them.",
        "Going forward, please lock the shed every time you leave, even if you see another gardener nearby. Last summer the door was often left open for hours, and that probably made the shed look like an easy target. A laminated reminder is now posted inside. Members who find the door unlocked should close it and let a coordinator know."
      ],
      [
        "As in past years, each member is expected to give at least four hours to shared jobs, such as turning the compost bays, mowing the edges or weeding the pollinator strip. A sign-up sheet will be posted on the shed door. If you cannot do physical work, there are jobs that need a phone or a laptop instead.",
        "The spring work bee will be held on {date2}, starting with coffee at the potting bench. We will rebuild two collapsed bed frames, spread wood chips on the paths and clear blackberry canes from the back fence. Please bring gloves and your own water bottle. Children are welcome as long as an adult stays with them the whole time."
      ],
      [
        "Welcome back to the garden. If anything in this letter is unclear, or if you would like to swap plots with another member for a better fit, please email me at {email}. I am usually at the garden on weekend mornings, and I am always happy to talk about soil, slugs or the best time to plant garlic.",
        "We look forward to another season of good harvests and friendly chats over the fence. If your plans change and you cannot use your plot, please let us know early so it can go to someone on the waiting list. Questions can go to {email} or to any coordinator wearing a green name badge on work days."
      ]
    ],
    "details": [
      "Plot No. {number} (raised bed, approx. 1.2 m by 3 m) is assigned to {p1} for the season beginning {date}; the plot must show visible planting by {date2} or it may be reassigned.",
      "The shed break-in was reported to the {city} RCMP detachment under file {ref} on {date}; items listed as stolen include a Stihl trimmer, a contractor-grade wheelbarrow and \"Felco No. 2\" pruners worth approx. {amount}.",
      "Our insurer, {company}, accepted the claim (ref. {ref2}) and paid {amount} toward replacement tools, less a deductible of {amount2} drawn from the maintenance fund.",
      "Water may be used between 5:00 a.m. and 11:00 p.m. only; members who leave a hose running unattended at {street} will receive one written warning from {sender} and may lose watering privileges for {number} days.",
      "{p2}, who lives on {street}, noticed the shed door ajar at approx. {time} and phoned a coordinator; {P2_he} did not enter the shed and waited for the attending officer.",
      "The new keypad lock, supplied and installed by {company} for {amount}, logs each entry by code; the log may be reviewed by {p3}, the treasurer, if tools go missing again after {date2}.",
      "Volunteer hours (minimum four per member) can be logged on the clipboard at the potting bench or by email to {email}; jobs posted for {date2} include compost turning, edging and \"pollinator strip\" weeding led by {p2}.",
      "Members on the reduced-fee list pay {amount2} instead of the full rate; applications are confidential and go only to {p3}, the treasurer, before {date2}."
    ]
  },
  {
    "id": "a03-pool-shutdown",
    "kind": "email",
    "title": "Pool maintenance shutdown and swim lesson rescheduling",
    "orgs": [
      "{city} Aquatic and Recreation Centre",
      "Tidewater Regional Recreation Services"
    ],
    "senderTitles": [
      "Aquatics Supervisor",
      "Swim Program Coordinator",
      "Recreation Programmer"
    ],
    "subjects": [
      "Pool closure and your swim lessons",
      "Lesson changes during pool shutdown, {ref}"
    ],
    "sections": [
      [
        "I'm writing to let you know that the main pool and the leisure pool will both be closed for annual maintenance starting {date}. Your child is registered in one of our lesson sets that overlaps with the shutdown, so I wanted to explain what is changing and what you can choose to do next. Nothing is needed from you right away.",
        "Quick heads-up about the pool: our yearly maintenance shutdown begins on {date}, and it lands right in the middle of the lesson set you signed up for. We've worked out a plan to finish every class rather than cut it short, and I've laid out the details below so you can decide what works best for your family."
      ],
      [
        "Every pool needs a deep clean once a year, and ours is overdue for more than that. The tank will be fully drained so staff can scrub the tile lines, patch chipped grout and replace the underwater lights on the deep end. The main circulation pump is also being rebuilt, which is the slowest part of the job.",
        "This year's shutdown is longer than usual because the filter sand needs replacing, and that only happens about once a decade. Our maintenance team will also regrout the gutter along the lap lanes and repaint the depth markings, which had faded enough that a lifeguard flagged them during a safety audit last spring. The hot tub gets new jets too."
      ],
      [
        "For your lesson set, the remaining classes will move to the outdoor pool at {street2}, which opens early this year just for our programs. It is heated to the same temperature as the indoor tank, and there are covered change rooms beside the deck. Class times stay the same, but please allow a few extra minutes for parking.",
        "We've arranged to borrow lane time at the {city2} high school pool for the weeks we're closed. Your child's class will keep the same instructor and the same group of kids, which we know matters a lot for the younger swimmers. The only change is the location and a start time that's fifteen minutes later than before."
      ],
      [
        "If the new location doesn't work for you, you can pick a full credit to your account instead. The credit can be used for any program at the centre, from skating to pottery, and it doesn't expire for a year. Just reply to this email and tell us which option you'd like, and we'll update the registration.",
        "We understand the change won't suit everyone. If you'd rather stop now, we can refund the unused classes to the card you paid with. Another choice is to move your child into the next lesson set, which starts the week after the pool reopens. Spots are being held for current families until registration opens to the public."
      ],
      [
        "Your child's progress card will travel with the class, so the instructor will know exactly which skills are done and which still need work. At the end of the set, everyone will get a report card as usual. If a child misses the final class, the instructor will still fill in the card based on what they saw earlier.",
        "Instructors are keeping notes on each swimmer, so nobody will lose ground because of the move. Swimmers close to finishing a level will get extra attention in the remaining classes. If your child is nervous about a new pool, let the instructor know at the first class there; they're used to helping kids settle into an unfamiliar deck."
      ],
      [
        "During the shutdown, the fitness room, gym and arena stay open on their usual hours. The change rooms near the pool will be closed, so use the arena change rooms if you're coming for a workout. Drop-in public swims are cancelled, but lap swimmers can use the borrowed pool on the two evenings a week we have booked.",
        "The rest of the building runs as normal while the pool is closed. Aquafit classes are paused, but our instructors are offering a land-based version in the multipurpose room at no extra charge for current pass holders. Parking near the pool doors may be blocked by a contractor's truck, so please use the lot by the arena instead."
      ],
      [
        "We expect to reopen on {date2}, though the date depends on the water tests after refilling. Filling the tank alone takes almost two days, and the chemistry has to settle before swimmers can get in. If anything delays us, I'll send another email and post an update on the front desk board right away.",
        "If the work goes to plan, swimmers will be back in the indoor pool by {date2}. Once the tank is refilled, it has to be heated and balanced, and the health inspector has to sign off before we can open the doors. We'll confirm the exact reopening day once that inspection is booked."
      ],
      [
        "Thanks for your patience, and sorry for the shuffle. If you have questions or want to change your registration, call the front desk at {phone} or reply to this message. We'd rather sort it out now than have anyone show up at the wrong pool, towel in hand, on lesson day.",
        "Thank you for understanding. I know juggling a new location is a hassle, especially for families with more than one child in lessons or a parent working shifts. You can reach me directly at {email}, and I'll do my best to answer within a day. See you on deck soon."
      ]
    ],
    "details": [
      "Lessons for course code {ref} (\"Swimmer 3\", Saturdays at {time}) will move to the {city2} school pool from {date} until the indoor pool reopens; parking is in the north lot off {street2}.",
      "Families choosing a credit instead of the relocated classes will receive {amount} on their account under file {ref}; credits expire one year from {date2} and cannot be transferred to another household.",
      "The filter media replacement, done by our contractor, {company}, uses approx. {number} bags of graded silica sand, and the tank holds roughly {bignumber} litres when full.",
      "{p1}, the aquatics supervisor, said the shutdown schedule (work order {ref2}) allows two days for refilling, one day for heating and one for the Island Health inspection before reopening on {date3}.",
      "Lap swim at the borrowed pool runs Tuesday and Thursday from {time} to {time2}; swimmers must show a valid pass, and spaces are limited to {number} per session.",
      "Refunds for unused classes are prorated at {amount} per lesson and processed within approx. 10 business days; questions about refunds go to {email} or ext. 3 at {phone}.",
      "Instructor {p2} will lead both relocated groups; {P2_he} holds a current NLS (National Lifeguard) award and has taught at the {city} centre for {number} seasons.",
      "Underwater lighting is being upgraded to sealed LED fixtures by {company2}, which should cut the pool's lighting energy use by roughly {percent}, according to the quote dated {date}."
    ]
  },
  {
    "id": "a04-farmers-market-move",
    "kind": "article",
    "title": "Farmers market moves to a new summer site",
    "orgs": [
      "{city} Neighbourhood News",
      "Mid-Island Community Voice"
    ],
    "senderTitles": [
      "Community Reporter",
      "Newsletter Editor",
      "Contributing Writer"
    ],
    "subjects": [
      "Farmers market finds a new summer home",
      "Market moves to {street2} this season"
    ],
    "sections": [
      [
        "After eleven summers in the parking lot behind the old fire hall, the {city} Farmers Market is packing up its tents and heading down the road. Starting {date}, the Saturday market will set up on the grassy field beside the elementary school, a spot that offers more room, more shade and, vendors hope, a lot less asphalt heat.",
        "Regulars who head to the usual lot this weekend will find it empty. The farmers market has moved for the summer season to the waterfront park on {street2}, where organizers say there is room for more stalls, a proper picnic area and a stage for local musicians. The first market at the new site opens on {date}."
      ],
      [
        "The move was not entirely by choice. The fire hall property was sold last fall, and the new owner plans to build townhouses there, with site work starting this summer. Market organizers spent most of the winter looking at possible sites, from church lots to a corner of the golf course, before settling on the new location.",
        "Market manager {p1} says the old lot had simply run out of space. The waiting list for stalls had grown to more than twenty vendors, and shoppers often had to squeeze past each other between the bread table and the egg cooler. A larger site was the only way to bring in new farmers without turning anyone away."
      ],
      [
        "Vendors seem cautiously pleased. A berry grower from the valley said the grass is easier on her feet than pavement, and the shade from a row of maples will help keep her flats from wilting by noon. A cheesemaker was more worried about parking, since many of his customers buy in bulk and need to load a car.",
        "Not everyone is thrilled. One longtime baker said she had built her whole morning routine around the old site, from where she parked her van to which neighbours dropped by first. Still, she admits the new spot has a working water tap and real washrooms, both of which the old lot lacked."
      ],
      [
        "Parking is the biggest question. The new site has a gravel lot with room for about sixty cars, and the school has agreed to open its staff lot on Saturdays. Organizers are also encouraging people to walk or bike, and a volunteer bike valet will watch over bicycles near the main entrance from opening until close.",
        "Getting there should be easy for most people. The site is on a regular bus route, and the transit authority has agreed to add a Saturday stop right at the park gate. Street parking is limited, so organizers suggest the public lot at the marina, which is a short walk along the seawall."
      ],
      [
        "The layout is changing too. Produce stalls will line the main path, with prepared food grouped together near the picnic tables so lineups do not block shoppers. Craft vendors will take the north end. A new information booth will hand out maps, and lost children can be brought there to wait for their families.",
        "Organizers have used the extra space to add a few new features. There will be a children's corner with a weekly activity, such as planting seeds or painting rocks, and a community table where local groups can hand out information. A small stage will host acoustic music, and buskers are welcome to apply for a slot."
      ],
      [
        "This year's vendor list includes about forty regulars and several newcomers, among them a mushroom grower, a family that makes apple cider vinegar and a young beekeeper from {city2}. Everyone must still meet the market rule that at least half of what they sell is grown, raised or made by their own hands.",
        "Among the new vendors this season are a goat farm selling soap and fresh chevre, a fermentation hobbyist turned small business, and a retired teacher who builds cedar birdhouses. The market committee screens every vendor to make sure products are local, and resellers of imported goods are still not allowed, no matter how popular they might be."
      ],
      [
        "Market hours stay the same, from nine until one, every Saturday through Thanksgiving weekend. Dogs are welcome on a short leash, though food vendors ask that owners keep pets away from the tables. The market still accepts the provincial nutrition coupons, and volunteers at the information booth can explain how they work.",
        "The market will run every Saturday morning through the end of September, with a special harvest market planned for early October. Cash is still handy, but most vendors now take tap payments. The coupon program for low-income families and seniors continues, with coupons accepted at every fresh food stall at the new site."
      ],
      [
        "Whether the move becomes permanent is still up in the air. The committee will survey vendors and shoppers at the end of the season and decide over the winter. For now, market manager {p1} says the best thing people can do is come out, buy some strawberries and tell organizers what they think.",
        "Organizers say they will keep an eye on what works and what does not, and they welcome feedback by email at {email}. If the new site proves popular, the market may stay there for good. Either way, the first Saturday promises fresh peas, warm bread and a chance to see old friends in a new setting."
      ]
    ],
    "details": [
      "The new site at {street2} is approx. {km} from the old fire hall lot; the {city} transit route No. 4 will stop at the park gate on Saturdays from {date} to {date3}.",
      "Stall fees for the season are {amount} for a 10 by 10 space and {amount2} for a double; vendors on the waiting list should contact {p1} at {email} before {date2}.",
      "The market's licence from the municipality (permit {ref}) allows up to {number} vendors at {street2}, a small amplified stage and \"temporary food service\" under Island Health rules.",
      "Last season the market drew an estimated {bignumber} shoppers; organizers hope attendance at the new site rises by {percent}, helped by the larger lot and a bus stop at the gate, according to {p1}.",
      "{p2}, who sells heritage tomatoes and salad greens, said {p2_he} lost about a third of {p2_his} lettuce to heat on the old asphalt lot last July; the maples at {street2} should help.",
      "Volunteers for the bike valet, the info booth and the 7:00 a.m. setup crew can sign up at {email} or call {phone}; shifts run from {time} to {time2}.",
      "The coupon program, sponsored in part by {company}, provides {amount} per week to eligible households in {city} for fresh vegetables, fruit, eggs, meat, fish, dairy and nuts.",
      "Parking on Saturdays is available in the school's staff lot (enter from {street}), the gravel lot by the field (approx. {number} spaces) and the marina lot along the seawall, about {km} away."
    ]
  },
  {
    "id": "a05-trail-storm-closure",
    "kind": "notice",
    "title": "Trail closure after storm damage and volunteer work party",
    "orgs": [
      "{city} Trails Society",
      "Comox Ridge Parks and Trails Committee"
    ],
    "senderTitles": [
      "Trail Steward",
      "Parks Volunteer Coordinator",
      "Society President"
    ],
    "subjects": [
      "Ridge trail closed after storm damage",
      "Work party to reopen trail on {date2}"
    ],
    "sections": [
      [
        "The upper loop of the ridge trail is closed until further notice. The windstorm that swept through the valley last week brought down dozens of trees across the path, including several large firs that fell together in a tangle near the second lookout. Please respect the closure signs and the barrier tape at both trailheads.",
        "Effective immediately, the creek trail between the footbridge and the old logging road is closed to all users. High winds and heavy rain over the past several days toppled trees, washed out part of the tread and left loose root wads hanging above the path. Walkers, runners and cyclists should use the lower route for now."
      ],
      [
        "Our volunteer stewards walked the trail on {date} and counted more than forty blowdowns, some lying flat and some hung up in other trees. Hung-up trees are the real danger, because they can shift without warning when the wind picks up or the soil softens after rain. That is why the closure covers the full loop.",
        "When our crew inspected the route, they found that a section of the bank had slumped toward the creek, leaving the trail narrow and undercut. One cedar is leaning over the path with its roots half exposed. Until a certified faller takes a look, nobody, including volunteers, should be walking that stretch of trail."
      ],
      [
        "We know many people walk this trail every day, often with dogs, and that a closure is frustrating. Some walkers have already been ducking under the tape. Please do not. Climbing over logs on a steep, wet slope is how people twist ankles, and a rescue crew would have a hard time reaching anyone hurt in that area.",
        "Over the weekend, a few hikers were seen scrambling around the slumped section, and one family turned back after their dog slipped down the bank. Thankfully, nobody was hurt. The trail looks passable from the bridge, but the damage gets worse around the first bend, out of sight. Please choose another route until the work is done."
      ],
      [
        "The good news is that the cleanup has already started. A certified faller from our contractor, {company}, will spend two days taking down the hung-up trees and anything else judged unsafe. Once that is done, the remaining work is mostly bucking and moving logs, brushing the edges and rebuilding a few water bars.",
        "Repairs will happen in stages. First, a professional crew will remove the leaning cedar and stabilize the bank with logs and rock. After that, volunteers can safely help with cutting and clearing. The trail surface will need fresh gravel in a few places, which the regional parks department has agreed to deliver by truck to the logging road."
      ],
      [
        "We are holding a volunteer work party on {date2} to finish the job. No chainsaw experience is needed, as sawyers will be certified members only. Everyone else will haul brush, rake tread, roll small rounds off the trail and help clear drainage ditches. It is hard but satisfying work, and many hands make it go quickly.",
        "Volunteers are needed for a work party on {date2}. We will meet at the main trailhead kiosk, sign the waiver, go over safety and split into crews. Some people will move rock and gravel, others will clear branches, and a small team will rebuild the steps near the creek crossing. Tasks will be matched to ability."
      ],
      [
        "Please bring sturdy boots, work gloves, rain gear and a lunch. We will supply hard hats, safety glasses, loppers, rakes and fire-hose drag sheets for moving brush. Teens aged fourteen and up may come with a parent or guardian who stays on the same crew. Dogs should stay home for this one.",
        "Wear long pants, closed boots with good tread and layers you can take off. Bring water and snacks. The society provides tools, gloves in most sizes and a first aid kit, and a trained first aider will be on site all day. Coffee and muffins from a local bakery will be waiting at the kiosk in the morning."
      ],
      [
        "If the work goes well, we hope to reopen the trail within a week of the work party. The final call will come after a second inspection to make sure no new hazards have appeared. Closure signs will come down only after that inspection, so please keep checking the trailhead board.",
        "Once the volunteers have finished, a trail steward will walk the route again and sign off before the barriers are removed. Some sections may stay rough for a few weeks while new gravel settles. We will also post a map showing a temporary reroute around the worst part of the bank if the full repair takes longer."
      ],
      [
        "To sign up, email {email} with your name and how many people are coming, so we can plan tools and snacks. If you cannot make it but want to help, donations toward the faller's bill are welcome. Thank you to everyone who reported damage and kept others off the slope.",
        "Please register by phone at {phone} or by email so we know how many to expect. Thank you to the neighbours who first reported the damage, and to everyone who has been patient while the trail is out of use. With some good weather and a strong turnout, we should all be back on it soon."
      ]
    ],
    "details": [
      "The closure covers the upper loop from the {street} trailhead to the second lookout (approx. {km}); the lower route via the powerline right-of-way remains open and is signed with orange diamonds until {date3}.",
      "Our contractor, {company}, will fall hazard trees on {date} and {date2}; the faller holds a current BC Forest Safety \"Faller Certification\" and will work under permit {ref} from the regional district.",
      "Work-party volunteers meet at the kiosk on {street} at {time}; crews break for lunch at noon and finish by {time2}, and everyone must sign the society waiver before picking up a tool.",
      "Steward {p1} counted {number} blowdowns on the loop, including a cluster of Douglas-fir and red alder near the lookout; {P1_he} flagged hung-up stems with pink tape and GPS points.",
      "Gravel for the tread (approx. {number} cubic metres of 3/4-inch minus) is being donated by {company2} and will be dropped at the logging road gate on {date2}.",
      "The society's insurance (policy {ref2}) covers registered volunteers only; anyone under 14, or anyone who arrives after the safety briefing at {time}, cannot join a crew on {date2}.",
      "Donations toward the faller's invoice of {amount} can be made by cheque to {org} or by e-transfer to {email}; receipts are issued for gifts over $20.",
      "Last winter's storm cleanup drew {number} volunteers who logged roughly {bignumber} hours combined, according to steward {p2}, who keeps the society's tool and work-party records."
    ]
  },
  {
    "id": "a06-crossing-guard-retires",
    "kind": "article",
    "title": "Long-time crossing guard retires",
    "orgs": [
      "{city} Heights Neighbourhood Association",
      "Westwood Bay Residents Association"
    ],
    "senderTitles": [
      "Newsletter Editor",
      "Volunteer Writer",
      "Association Secretary"
    ],
    "subjects": [
      "A fond farewell at the corner",
      "Our crossing guard hangs up the stop sign"
    ],
    "sections": [
      [
        "For close to twenty years, the first familiar face many children saw on a school morning belonged to {p1}. Rain or shine, {p1_he} stood at the corner by the elementary school in a yellow vest, holding up a hand-painted stop sign and greeting kids by name. This June, after one last school year, {p1_first} is retiring.",
        "If you have driven past the school corner at a quarter past eight on a weekday, you have probably waved at {p1}. The neighbourhood's crossing guard has walked children across the busy intersection since before some of their parents finished high school. At the end of this school year, {p1_he} will hand over the vest for good."
      ],
      [
        "{P1_he} took the job almost by accident. A neighbour who held the post broke a wrist one winter and asked {p1_title} to fill in for a few weeks. The few weeks turned into a whole year, and then into a career of sorts. The pay was modest, but the mornings, {p1_he} says, were worth more than any paycheque.",
        "The job started as a way to stay busy after an early retirement from the pulp mill. {P1_he} answered a small ad in the community paper, went to one training session with the school district and was given a whistle, a reflective vest and a sign. Nobody expected the arrangement to last nearly two decades."
      ],
      [
        "Over the years, {p1_title} has seen the neighbourhood change around that corner. The corner store became a coffee shop, the old house across the road was replaced by a fourplex, and traffic grew heavier every year. The crosswalk got flashing lights and a raised curb, partly because {p1_he} kept a careful log of near misses.",
        "The intersection is busier than it used to be, with delivery vans, logging trucks heading to the highway and a steady line of parents dropping off. {P1_he} has kept a notebook of license plates from drivers who rolled through the crosswalk, and passed the worst ones to the RCMP more than once. Drivers learned to slow down."
      ],
      [
        "Families remember the small things most. {P1_he} kept a bag of dog biscuits for the regular dogs walking with their families, wore a Santa hat the week before winter break and learned to say good morning in several languages as new families arrived. Children who were once nervous kindergartners now come back as teenagers to say hello.",
        "Parents talk about how {p1_he} noticed things. A child with a sad face would get an extra minute of chat at the curb. A missing mitten would turn up the next day, clipped to the signpost. Several former students, now grown, have sent cards and photos to the school office since hearing about the retirement."
      ],
      [
        "Principal {p2} says a good crossing guard is part of the school's safety net, but {p1_title} went beyond that. Staff often heard from {p1_him} first when a family was struggling or when a child seemed afraid to come to school. That kind of quiet attention, {p2_title} says, is very hard to replace with a simple job posting.",
        "The school's principal calls {p1_title} a member of staff in every way but the payroll. Teachers often relied on {p1_him} to spot which children arrived late or alone, and to mention it kindly at the office. The school district has posted the job, but nobody at the school is pretending the new person will fill those shoes right away."
      ],
      [
        "As for retirement plans, {p1_first} is keeping things simple. There is a vegetable garden that has been neglected for years, a fishing rod in the garage and grandchildren in {city2} who would like more visits. {P1_he} also hopes to volunteer at the library reading program, so many of the same children may see {p1_him} again.",
        "When asked about plans, {p1_title} laughs and says sleeping in is at the top of the list. After that come long walks on the beach, a trip to visit a sister on the mainland and finally finishing a quilt that has been sitting in pieces for three winters. {P1_he} has promised to stop by the school corner now and then."
      ],
      [
        "The association is collecting notes and drawings from children and families, which will be bound into a scrapbook and presented at the last day of school assembly. Anyone who wants to add a page can drop it at the school office or the community centre front desk before the end of the month.",
        "To mark the retirement, the school and the association are planning a small celebration on the field after classes end in June. There will be lemonade, cake and a chance to sign a large card. Former students and families who have moved away are welcome to send messages by email so they can be read aloud."
      ],
      [
        "The new crossing guard will start in September, and the association hopes neighbours will offer the same warm welcome. In the meantime, if you see {p1_title} at the corner this spring, slow down, wave and say thank you. A lot of children made it to class safely because of that steady hand.",
        "There will be a new face at the corner next fall. For now, the best tribute is the one {p1_title} would ask for: slow down near the school, stop fully at the crosswalk and keep your eyes off your phone. That habit, more than any plaque, is what will keep the next generation safe."
      ]
    ],
    "details": [
      "{p1} began as a crossing guard at the corner of {street} and Hillcrest in September 2007, and by {p1_his} own count has helped children across roughly {bignumber} times.",
      "The farewell gathering is set for {date} at {time} on the school field (rain location: the gym); RSVPs are welcome but not required, and messages can be sent to {email}.",
      "The flashing-beacon crosswalk at {street} was installed by the municipality in 2019 (project {ref}) after a petition with approx. {number} signatures was presented to council.",
      "The school district has posted the crossing guard job (posting No. {ref2}) at {amount} per shift; applicants need a criminal record check, a valid first aid ticket and {number} hours of training.",
      "Principal {p2} said the school will plant a Japanese maple beside the crosswalk in {p1_his} honour; a small plaque reading \"Thank you for every morning\" will be added on {date2}.",
      "Scrapbook pages (no larger than letter size, please) can be dropped off at the community centre on {street2} or the school office before {date}; the binding is being donated by {company}.",
      "Traffic counts by the municipality show approx. {bignumber} vehicles pass the school corner on {street} each weekday, with peak volumes between 8:00 a.m. and 8:40 a.m.; speeding is down by {percent} since 2019.",
      "Former students, e.g. {p3}, now a paramedic in {city2}, have written to say {p1_title} taught them to \"look both ways, then look again\" before stepping off the curb."
    ]
  },
  {
    "id": "a07-seniors-ferry-trip",
    "kind": "letter",
    "title": "Seniors centre day trip by bus and ferry",
    "orgs": [
      "{city} Seniors Activity Centre",
      "Harbourview Golden Years Society"
    ],
    "senderTitles": [
      "Trips and Outings Coordinator",
      "Program Director",
      "Volunteer Trip Leader"
    ],
    "subjects": [
      "Day trip sign-up and travel details",
      "Your seat on our island day trip, {ref}"
    ],
    "sections": [
      [
        "Thank you for your interest in our next day trip. This summer we are heading across to one of the smaller Gulf Islands for a day of gardens, a local craft fair and lunch at a waterfront cafe. Many members asked for an outing that involves a ferry ride, and we are happy to finally make it happen.",
        "I am writing with details about the day trip you asked about at the front desk. The outing will take us by chartered bus to the ferry terminal and across to a nearby island, where we will tour a heritage farm, visit a small museum and enjoy a sit-down lunch. The day will be full but not rushed."
      ],
      [
        "The bus will leave from the centre's front entrance early in the morning, so please plan to arrive at least fifteen minutes before departure. The ride to the terminal takes a little under an hour. Once we are on the ferry, you are free to stay on the bus or go up to the passenger lounge for coffee and the view.",
        "We will travel on a coach with reclining seats and a washroom on board. The driver will load us onto the ferry as a group, so there is no need to buy your own ticket at the terminal. The crossing is about forty minutes, and the ferry has a cafeteria, an elevator and plenty of window seats."
      ],
      [
        "On the island, the bus will take us to each stop, and nobody will need to walk more than a short distance at any one time. The farm visit includes a guided walk on a gravel path, but benches are spaced along the way, and anyone who prefers can wait in the farmhouse kitchen with a cup of tea.",
        "The island has hilly roads, but the bus will park close to each stop. Lunch is at a cafe with a ramp at the front door and an accessible washroom. The museum is on one level. The craft fair is held in a community hall, which can be crowded, so we will arrive early to give everyone room to browse."
      ],
      [
        "Accessibility matters to us, and we want everyone to enjoy the day. The bus has a wheelchair lift and room for two wheelchairs, as well as space for walkers in the luggage bay. If you use a mobility device, please tell us when you sign up so we can plan seating and make sure the driver is ready.",
        "If you use a walker, cane, scooter or wheelchair, please let us know on the sign-up form. Our coach has a lift, but space is limited, and we need to plan ahead. Members who need help with steps or carrying bags can bring a companion, and we will do our best to seat you together."
      ],
      [
        "The cost of the trip covers the bus, the ferry fare, admission to the farm and museum, and lunch. Snacks and any shopping are extra. Payment is due when you sign up, and seats are held in the order payments are received. We can accept cash, cheque or debit at the front desk.",
        "The trip fee of {amount} includes transportation, ferry fares, entry fees, a sandwich lunch with dessert and gratuities. Members who find the cost difficult can speak privately with our program director, as the centre has a small fund to help with outings. Nobody needs to explain their reasons, and all requests stay confidential."
      ],
      [
        "Please pack light, but bring layers. The weather on the water can be cool even in July, and the wind on the ferry deck is often sharp. Comfortable shoes are a must. Remember any medications you need during the day, and keep them in a small bag with you rather than in a suitcase under the bus.",
        "We recommend a light jacket, a hat, sunscreen and a refillable water bottle. If you need to take medication with food, bring a small snack in case lunch runs late. A trip leader with first aid training will travel with the group, and the bus will carry a basic first aid kit and spare blankets."
      ],
      [
        "Ferry schedules sometimes change, especially on busy summer weekends, so our return time is an estimate. If we miss the planned sailing, we will catch the next one, and the centre will call family contacts to let them know. Please give us an emergency contact name and number on your form.",
        "We plan to be back at the centre in the early evening. If there is a ferry delay, our trip leader will phone the centre, and staff will contact anyone waiting to pick up a member. Please make sure your emergency contact information is up to date on your membership card before we go."
      ],
      [
        "Sign-up sheets are at the front desk until {date}, or you can call us at {phone}. Seats are limited, and last year's ferry trip filled within a week, so please do not wait too long. We hope you can join us for a day of fresh air, good food and good company.",
        "To reserve a seat, please complete the attached form and return it to the office by {date}. If you have questions about the trip or about accessibility, you can reach me at {email}. I look forward to sharing a ferry ride with you, {r_title}, and to a very pleasant day out."
      ]
    ],
    "details": [
      "The coach, chartered from {company}, leaves the centre at {street} at {time} on {date2} and is booked on the 9:10 a.m. sailing; the return sailing departs the island at approx. {time2}.",
      "Members who use mobility devices should note them on the form (e.g. \"folding walker\", \"power scooter\") by {date}; the coach from {company} has a lift rated at approx. 360 kg, and only {number} wheelchair spaces are available.",
      "The trip fee of {amount} covers bus, ferry fares, entry to the farm and museum, and lunch; refunds are available until {date} only if the seat can be filled from the waiting list kept by {p2}.",
      "Our trip leader, {p1}, holds a current Standard First Aid certificate and will carry a cell phone; {P1_his} number will be posted on the bus window and given out at {time}.",
      "Lunch is at a waterfront cafe operated by {company2}; members with allergies or diets (e.g. gluten-free, diabetic, low-sodium) must list them on the form by {date} or call {phone}.",
      "Reservation No. {ref} holds {number} seats; any unclaimed seats will be released to the waiting list on {date2}, and members will be called in order at the number on their file.",
      "Assistance from the outings fund (ask {p2}, ext. 22, at {phone}) can cover up to {amount2} of the fee; requests are confidential and are reviewed within approx. two days.",
      "The heritage farm walk is approx. {km} on packed gravel with benches every 100 m; members who prefer to rest can wait in the farmhouse kitchen with volunteer {p3} until {time2}."
    ]
  },
  {
    "id": "a08-soccer-field-schedule",
    "kind": "memo",
    "title": "Youth soccer field allocation conflict and revised schedule",
    "orgs": [
      "{city} Youth Soccer Association",
      "North Island United Youth Soccer Club"
    ],
    "senderTitles": [
      "Field Scheduler",
      "Director of Operations",
      "League Coordinator"
    ],
    "subjects": [
      "Revised field schedule for all coaches",
      "Field conflict and new practice times"
    ],
    "sections": [
      [
        "This memo goes to all head coaches and assistant coaches in the under-nine to under-fourteen divisions. Over the past two weeks we have had a field booking conflict with the adult rugby club, and several of our teams arrived for practice to find the pitch already in use. We have now sorted it out, and a revised schedule is attached.",
        "Coaches, thank you for your patience over the last few weeks while we untangled the field bookings. As many of you saw firsthand, two groups were booked on the same pitches at the same times on several weeknights. The team has met with the parks department, and we now have a fixed schedule for the rest of the season."
      ],
      [
        "The problem came from the municipality's booking system. When the parks office moved to new software this spring, our block booking for the upper field was entered for the wrong season, and the slots were released to other users. The rugby club booked them in good faith, so nobody was in the wrong.",
        "The root cause was a double booking at the parks office. A staff member renewed our seasonal permit, but the system also accepted a request from a local adult league for the same evenings. Both groups held valid paperwork. The city has apologized, and staff have added a check to stop this from happening again next year."
      ],
      [
        "The fix involves some give and take. The rugby club keeps the upper field on Tuesday and Thursday evenings, and we get it back on Monday, Wednesday and Friday. In exchange, the city has given us the lower turf field on Tuesdays and Thursdays, which is lit until nine, so late practices are possible.",
        "Under the new arrangement, our younger divisions move to the school fields on {street2} on weeknights, while the older teams keep the main park. The school fields are a bit smaller, but they suit small-sided games well. Saturday game day stays the same for everyone, with all matches at the main park complex."
      ],
      [
        "Please check the attached schedule carefully, because almost every team has at least one change. Some practice times move earlier, and a few teams swap nights. If your new slot does not work for your volunteers, talk to the field scheduler before you tell your families, since swaps between teams may be possible.",
        "Each team's new practice night and field are listed on the revised schedule. Please read it twice before you send it out to parents. A few teams have a shorter practice window than before. If your team needs a longer slot, for example to prepare for a tournament, ask early and we will try to find room."
      ],
      [
        "Please send the new schedule to your families by the end of this week. Parents should know where to park, which entrance to use and where the washrooms are at the new field. A short message from you will save a lot of confusion and avoid kids waiting alone at the wrong site.",
        "When you contact your families, please remind them about the new location and that parking is limited near the school. Drop-off is allowed in the bus loop after five o'clock, but not before. Players should not be left at the field until a coach or team manager has arrived, so please be on time."
      ],
      [
        "Coaches are also reminded to leave the fields as they found them. At the end of practice, return the goals to the edge, pick up cones and pinnies, and check for water bottles. The rugby club has been very cooperative, and leaving the field clean and clear on time helps keep that good relationship.",
        "Equipment storage is changing too. The new site does not have a storage shed, so teams practising there should take cones, balls and bibs home after each session. Pop-up goals will be stored in a locked box beside the field. Please lock it every time, as the school has asked us to be careful."
      ],
      [
        "If you arrive and find another group on your assigned field, do not argue with them. Take a photo of the field and their permit if they show it, keep your players safe, and contact the field scheduler right away. We will deal with it at the office level so coaches are not put in an awkward spot.",
        "Should another conflict come up, please stay calm and polite, and remember there are kids watching. Move your team to a free area if possible, or cancel practice if needed. Then report the problem to the field scheduler with the date, time and field, so we can follow up with the city the next morning."
      ],
      [
        "Thank you for everything you do for our players. We know the last few weeks have been a headache, especially for coaches who had to send kids home early. Questions about the schedule can go to {email}, and the field scheduler will reply within a day. Have a great rest of the season.",
        "We appreciate how flexible our coaching volunteers have been. If you have any concerns about the new schedule, please email {email} or call {phone}. The board will review how the season went at the fall meeting, and coach feedback on fields, lighting and booking will be part of that discussion."
      ]
    ],
    "details": [
      "Under the revised permit (No. {ref}), U9 and U10 teams practise at the school fields on {street2} from {time} to {time2}, Monday through Thursday; Fridays are reserved for makeup sessions.",
      "The rugby club, coordinated by {p1}, keeps the upper field on Tuesday and Thursday evenings until {date2}; after that date the full field at {street} returns to the association for fall league play.",
      "Field scheduler {p2} confirmed with the parks office that the error was logged as ticket {ref2}, and that a credit of {amount} will be applied to the association's account by {date}.",
      "Lights on the lower turf field run until 9:00 p.m. on weeknights; teams booked after {time2} must confirm with {p2} by email to {email} that the lights are scheduled, or practice must end at dusk.",
      "Coaches who need to swap slots should email {email} with both team names, the dates (e.g. {date} and {date2}) and the field; swaps take effect only after written confirmation.",
      "Pop-up goals and the lock box at the school site were supplied by {company} for {amount2}; the combination is posted in the coaches' group chat and changes on {date3}.",
      "The association has {number} teams and approx. {bignumber} registered players this season; the revised schedule moves {number2} teams to new fields or new nights.",
      "Report any field conflict to {p3}, the operations director, at {phone}; include the field, the time, the other group's name and a photo of their permit, and note the city's ticket {ref2} in your message."
    ]
  },
  {
    "id": "a09-hamper-drive-thanks",
    "kind": "letter",
    "title": "Christmas hamper drive results and thanks to donors",
    "orgs": [
      "{city} Christmas Hamper Society",
      "Valley Holiday Food and Toy Drive"
    ],
    "senderTitles": [
      "Hamper Drive Coordinator",
      "Board Chair",
      "Donor Relations Volunteer"
    ],
    "subjects": [
      "Thank you for supporting the hamper drive",
      "Hamper drive results and our thanks"
    ],
    "sections": [
      [
        "On behalf of everyone at the hamper society, thank you for your generous gift to this year's Christmas hamper drive. Your support helped local families sit down to a full holiday meal, and it put wrapped gifts under trees that might otherwise have stayed bare. We wanted you to know just how far your gift went.",
        "Now that the last hamper has been delivered and the warehouse floor is swept, I want to say thank you. Your donation arrived at a time when requests were climbing fast, and it made a real difference. This letter shares the results of the drive and a few stories from the volunteers who packed and delivered every box."
      ],
      [
        "This year we packed and delivered more hampers than ever before. Requests came from young families, seniors living alone, students who could not afford to travel home and workers between jobs. Every hamper included a turkey or ham, fresh vegetables, baking supplies, canned goods and a small treat, plus gift cards for families who needed them.",
        "Demand rose again this season, driven by higher grocery prices and rents across the valley. Our intake volunteers met with households at the food bank and the friendship centre to learn what each family needed. Some asked for halal meat, some for baby formula and diapers, and several seniors simply asked for a visit when the hamper arrived."
      ],
      [
        "Toys were a big part of the drive this year. Local schools and businesses collected new, unwrapped gifts in bins at their front doors, and a team of volunteers sorted them by age in the church hall. Every child on our list received at least two gifts, plus a book chosen with help from the library staff.",
        "Our toy room was busier than ever. Donated gifts were sorted into age groups and tagged so parents could choose gifts for their own children, which many families told us meant a lot. Teens are often overlooked, so we were especially glad to have gift cards, headphones and art supplies to offer them this year."
      ],
      [
        "None of this would happen without volunteers. More than a hundred people gave their time, from the retired firefighters who unloaded the turkey truck to the high school students who wrapped gifts after class. Drivers used their own cars and fuel to deliver hampers across town and up to the rural roads beyond the highway.",
        "Volunteers did the heavy lifting, sometimes literally. A local trucking company lent us a refrigerated trailer for frozen food, and a team of grocery staff came in on their days off to check dates and sort produce. Delivery drivers worked in snow on two of the three delivery days, and every hamper still reached its family."
      ],
      [
        "Your financial gift was used to buy fresh food and fill gaps that donations of goods could not cover. Cash lets us buy milk, eggs, butter and produce close to delivery day, so hampers arrive fresh. We also used donated funds to buy grocery gift cards, which families can use in January when the holiday rush is over.",
        "Monetary gifts were especially important this year because food donations were down slightly. Your donation helped us buy turkeys in bulk from a local grocer at cost, and it covered the rental of the warehouse where we packed hampers. Any funds left over will help support the food bank's winter program in the coming months."
      ],
      [
        "We heard from many families after delivery. One mother wrote that her children had never seen so many oranges in one box. A senior who lives alone told a driver that the hamper was the first knock at her door in two weeks. These are small moments, but they are exactly what your gift made possible.",
        "Thank-you cards are still arriving at our office. A father of three wrote that he had been too proud to ask for help until a neighbour signed him up, and that the hamper gave his family a real Christmas. A young couple with a new baby said the diapers and formula got them through a very hard month."
      ],
      [
        "Your official tax receipt is enclosed with this letter. If any of the details are incorrect, please contact our office so we can issue a corrected receipt before tax season. We also keep a list of donors who prefer to stay anonymous, and we are happy to add your name if you would like.",
        "A charitable tax receipt for your donation is included. Please keep it with your records for this tax year. If you would like to receive future updates by email instead of mail, or if you would prefer not to be listed in our annual report, just let us know by phone or email."
      ],
      [
        "Thank you again for making the season brighter for so many neighbours. Planning for next year's drive begins in September, and we would love your help again, whether by giving, driving or packing boxes. If you have questions about how your gift was used, please contact me at {email} or by phone at {phone}.",
        "We are already thinking about next year, with plans to add a second packing site in {city2} to cut down on driving time for our rural volunteers. Your continued support makes that possible. Thank you, {r_title}, for standing with your community this Christmas. Please call {phone} if you ever want to visit the warehouse."
      ]
    ],
    "details": [
      "This year the society delivered {bignumber} hampers, up {percent} from last year; volunteers packed boxes at the warehouse on {street} from {date} through {date2}.",
      "Your donation of {amount}, received on {date}, is acknowledged under receipt No. {ref}; our charitable registration number is printed at the bottom of the receipt.",
      "Turkeys were purchased at cost from our partner grocer, {company}, which also lent a refrigerated trailer; approx. {number} volunteers unloaded the shipment at {time} on {date2}.",
      "Gift cards worth {amount2} each were given to families with teens (e.g. ages 13 to 17); the \"Teen Table\" was organized by {p1}, a youth worker at the {city} friendship centre.",
      "Delivery drivers covered roughly {km} combined over three days, including rural routes beyond {city2}; fuel cards donated by {company2} helped offset their costs.",
      "Volunteer coordinator {p2} reported that {number} school groups collected toys; {P2_he} said the top-donated items were LEGO sets, art kits, board games and \"anything with a dinosaur\".",
      "Leftover funds (approx. {amount}) will be passed to the {city} food bank for its winter breakfast program, as approved by the board at its meeting on {date3}.",
      "Donors who wish to be listed anonymously, or who need a corrected receipt (file {ref2}), should contact {p3} at {email} or call {phone} before the end of February."
    ]
  },
  {
    "id": "a10-hall-rental-reunion",
    "kind": "email",
    "title": "Hall rental confirmation for a family reunion",
    "orgs": [
      "{city} Community Hall Society",
      "Fairbridge Farmers Institute Hall"
    ],
    "senderTitles": [
      "Hall Booking Secretary",
      "Rentals Coordinator",
      "Hall Manager"
    ],
    "subjects": [
      "Your hall booking is confirmed",
      "Reunion booking {ref}: details and rules"
    ],
    "sections": [
      [
        "Good news: your booking of the main hall for your family reunion is confirmed. We received your deposit and signed rental form, and the date is now blocked on our calendar. This email covers the practical details, including access, kitchen use and cleanup, so please read it through and share it with whoever is helping you organize.",
        "Thanks for choosing our hall for your family reunion. I'm happy to confirm the booking is locked in, and your deposit has been received. Below you'll find everything you need for the day, from picking up the key to what we expect at the end of the night. Feel free to forward this to your planning committee."
      ],
      [
        "Your rental includes the main hall, the stage, the kitchen and the covered patio out back. Tables and chairs are stored in the room off the stage, and there is enough seating for about a hundred and twenty people. The upstairs meeting room is not part of this booking, as another group uses it that evening.",
        "The booking covers the hall floor, the kitchen, both washrooms and the lawn on the west side. We have round tables for eight and long rectangular tables, so you can set the room however you like. A piano is on the stage, and it may be played, but please do not move it, as it is heavy and easily damaged."
      ],
      [
        "You can pick up the key from the booking secretary the day before your event, or we can meet you at the hall to let you in. Please let us know which works. When you arrive, the alarm panel by the side door will be beeping; enter the code we give you within thirty seconds to turn it off.",
        "Access is through the side door off the parking lot. A lockbox beside it holds the key, and we'll text you the code the day before. Please don't share it beyond your organizing group. The front doors stay locked from the inside and should only be opened for guests arriving, then latched again when everyone is in."
      ],
      [
        "The kitchen is well equipped, but there are a few rules. The commercial stove and oven can be used, but the deep fryer is off limits for insurance reasons. Please use the large pots and roasting pans in the lower cupboards rather than the ones labelled for the women's auxiliary, which belong to them and not to the hall.",
        "Kitchen use is included, and the fridge, oven, stovetop and dishwasher are all available. Please don't bring propane burners or barbecues indoors, and keep anything with an open flame outside on the gravel. If you hire a caterer, they'll need to show us proof of a food safe certificate and insurance before the day."
      ],
      [
        "Please bring your own dish soap, tea towels and garbage bags. The commercial dishwasher runs a short cycle, and instructions are taped to the front. All dishes, cutlery and pots must be washed, dried and put back where you found them. Food should not be left in the fridge or freezer after your event.",
        "We supply cleaning products, mops and buckets, but you'll need to bring tea towels and extra garbage bags. Run the dishwasher before you leave, and wipe down counters and the stove. Leftover food has to go home with you, as the fridge is emptied every Monday and anything left behind gets tossed."
      ],
      [
        "Cleanup is the renter's job. Tables and chairs should be wiped and stacked in the storage room on their carts. The floor needs to be swept, and any spills mopped. Garbage, recycling and compost each go in the labelled bins behind the hall. Please check the washrooms and the patio before you lock up.",
        "Before leaving, please stack chairs ten high on the dollies and fold the tables back onto their racks. Sweep the main floor and the kitchen. Take your decorations down carefully; tape and tacks can damage the walls, so please use the hooks along the picture rail instead. Bags of garbage go in the bin by the shed."
      ],
      [
        "Your damage deposit will be returned within a week if the hall is left clean and nothing is broken. If we need to call in a cleaner or replace anything, the cost will come out of the deposit, and we'll send you a short note with photos. Music should be turned down after ten out of respect for the neighbours.",
        "We'll do a walk-through the next morning and return your deposit if all is well. Please note the hall's quiet time starts at eleven, and the doors must be locked by midnight. Alcohol is allowed only with a special event licence, which you'll need to apply for yourself and show us a copy of before the event."
      ],
      [
        "If you have questions, call me at {phone} or reply to this email. I'm usually around on weekday mornings. I hope your family has a wonderful reunion, with lots of good food and catching up. Our hall has hosted many gatherings like yours, and we're glad to be part of this one.",
        "Let me know if anything comes up between now and the big day. You can reach me at {email}, and I'll reply as quickly as I can. We hope the reunion is a great success, and that everyone leaves with full plates and plenty of new photos for the family album."
      ]
    ],
    "details": [
      "Booking {ref} confirms the main hall at {street} on {date} from {time} to {time2}; setup may begin earlier only if arranged with {sender} by {date2}.",
      "The rental fee of {amount} for booking {ref} has been paid in full; your damage deposit of {amount2} will be refunded by cheque or e-transfer within approx. seven days of the walk-through.",
      "Caterers, e.g. {company}, must provide a current FOODSAFE certificate and a certificate of insurance naming {org} as an additional insured before {date}.",
      "A special event licence (Liquor and Cannabis Regulation Branch) is required to serve alcohol; please email a copy of your licence No. to {email} at least {number} days before {date}.",
      "The alarm code and the lockbox code will be texted to {p1}, the organizer named on the rental form, on {date}; the codes change after every booking and again on {date3}.",
      "The hall seats approx. {number} people at round tables; the fire marshal's maximum occupancy (posted beside the main doors, permit {ref2}) is {bignumber} for standing events.",
      "Cleaning charges, if needed, are billed at {amount} per hour by our janitorial contractor, {company2}; broken items are charged at replacement cost and listed on the walk-through form signed by {p3}.",
      "If the power goes out, call the hall's emergency contact, {p2}, at {phone}; flashlights are kept in the drawer to the left of the kitchen sink at {street}, beside the first aid kit."
    ]
  },
  {
    "id": "b01-twelve-hour-rotation",
    "kind": "memo",
    "title": "New 12-hour shift rotation at the emergency communications centre",
    "orgs": [
      "{city} Regional Emergency Communications Centre",
      "North Island Emergency Communications"
    ],
    "senderTitles": [
      "Operations Manager",
      "Deputy Director, Communications",
      "Shift Scheduling Coordinator"
    ],
    "subjects": [
      "New 12-hour rotation starts {date2}",
      "Shift schedule change for all floor staff"
    ],
    "sections": [
      [
        "After nearly a year of discussion with the floor supervisors and the union local, the centre is moving from 8-hour shifts to a 12-hour rotation. The change takes effect on {date2} for all call-takers and dispatchers. Support staff in records and technical services will keep their current hours. This memo explains how the new pattern works and what each of you needs to do before the switch.",
        "Starting {date2}, every call-taker and dispatcher on the floor will work a 12-hour rotation instead of the old 8-hour pattern. The decision came out of the staffing review that closed last spring, when most of you told us that three shift changes a day were wearing everyone down. The goal is fewer handovers, longer stretches off, and more predictable weekends for families."
      ],
      [
        "The new pattern is a four-on, four-off cycle. You will work two day shifts from 7 a.m. to 7 p.m., then two night shifts from 7 p.m. to 7 a.m., followed by four full days off. Over a full year this works out to almost the same number of paid hours you work now, so base pay will not change for anyone.",
        "Each team will follow a repeating eight-day block: two days, two nights, then four days off. Day shifts begin at 0700 and night shifts at 1900, with a 15-minute overlap at each change so the outgoing crew can brief the incoming crew at the console. Annual hours stay within a few hours of the current total, and the collective agreement already allows this pattern."
      ],
      [
        "Staff have been placed on one of four platoons, labelled A through D. We tried to keep current partners together and to spread experienced dispatchers evenly so that every platoon has at least two people certified on fire channels. Your platoon letter is posted on the board outside the lunchroom and is also listed beside your name in the scheduling app.",
        "The four new platoons were built by {p1}, who spent several weeks matching skills, seniority and the requests many of you submitted. Each platoon has a mix of police, fire and ambulance call-takers, and each has a senior dispatcher who can act as the floor lead. If you see your name on the wrong list, tell {p1_him} before the end of the month."
      ],
      [
        "Breaks will work a little differently on a long shift. Everyone gets two 30-minute meal breaks and two 15-minute rest breaks, staggered by the floor lead so the consoles never drop below minimum staffing. Please do not swap break times between yourselves without telling the lead first. On a busy night, a quiet word to the lead is all it takes.",
        "A 12-hour shift is long, especially overnight, so we have adjusted breaks to match. You will have one hour of meal time, split into two halves, plus two short rest breaks. The quiet room on the second floor now has a reclining chair and blackout blinds, and the kitchen has a new coffee machine that, we are told, actually works."
      ],
      [
        "Shift trades are still allowed, but they must now cover a full 12-hour block. Half-shift trades create gaps that are hard to fill at 1 a.m. Both people must enter the trade in the scheduling app at least 48 hours ahead, and a supervisor will approve it as long as the platoon stays at minimum strength and nobody goes over 60 hours in a week.",
        "Trading shifts with a coworker is fine, as it was before, with two new limits. You cannot work more than three 12-hour shifts in a row, including trades, and you must have at least 11 hours off between the end of one shift and the start of the next. The app will now block any trade that breaks either rule, so please do not ask a supervisor to override it."
      ],
      [
        "We know the transition week will be awkward. Some of you will finish an 8-hour evening shift and then start your first 12-hour day not long after. To smooth this out, the week of {date2} has been drawn up by hand, and nobody will work more than 40 hours that week. Overtime rules apply as usual if extra coverage is needed.",
        "During the first two weeks, a relief dispatcher will be on the floor during every day shift to cover gaps while people adjust. Expect some bumps: the overnight crew in particular may find the last few hours tough at first. If you are struggling with fatigue, speak to your supervisor. That is not a weakness; it is exactly what we need to know."
      ],
      [
        "Information sessions will be held in the training room on {date} at 10 a.m. and again at 8 p.m. so both day and night staff can attend. Bring your questions about pay periods, statutory holidays and vacation banks. Payroll staff will be there to explain how holiday pay is calculated when a holiday falls in the middle of a night shift.",
        "We are holding two drop-in sessions before the change, one in the morning and one in the evening, both in the boardroom beside the dispatch floor. {p2} from payroll will walk through how your pay stubs will look and how sick time is counted against a 12-hour day. Coffee and snacks will be provided, and you are welcome to come in uniform during a break."
      ],
      [
        "This is a big change and we will review it honestly. After six months we will survey every staff member and look at sick time, overtime and call answer times. If the numbers or your feedback show the rotation is not working, we will sit down with the union and adjust it. Thank you for your patience while we get this right.",
        "Thank you to everyone who sat on the scheduling working group and to all of you who filled in the survey last spring. Your comments shaped almost every part of this plan. We will check in at three months and again at six months, and the working group will stay in place to sort out any problems that come up along the way."
      ]
    ],
    "details": [
      "Platoon assignments (A through D) were finalized by {p1} on {date}; any corrections must be sent to {email} or to ext. {number} no later than {time} on {date2}.",
      "Under Article 14.3 of the collective agreement, a 12-hour shift counts as 1.5 \"standard days\" for sick-leave purposes; e.g., a missed night shift on {date} deducts approx. 12 hours from your bank, as confirmed by {p2} in file {ref}.",
      "The quiet room (Rm. 2-108) will be reserved for night-shift rest breaks between {time} and {time2}; staff from the {city2} backup site may also use it during cross-training on {date3}.",
      "Minimum floor staffing for the overnight block is set at {number} call-takers and {number2} dispatchers; if staffing drops below that level, the floor lead must call the on-call supervisor at {phone} immediately.",
      "Payroll (attn: {p2}) confirms that shift premiums of {amount} per hour for nights and {amount2} per hour for weekends will continue unchanged under the new rotation, ref. {ref2}.",
      "Trade requests submitted after {time} on {date} will be held for review by {p3}; the scheduling app logs each request with a timestamp, the platoon letter, and a \"pending\" or \"approved\" status code.",
      "The six-month review (working group chair: {p3}) will compare overtime hours, sick-leave usage and 90th-percentile answer times against the baseline period ending {date}, as outlined in report No. {ref}.",
      "Staff who live more than {km} from the centre, e.g. in {city2} or beyond, may apply for a winter-driving stipend of {amount}; applications close on {date3} and must include a signed travel declaration."
    ]
  },
  {
    "id": "b02-records-system-training",
    "kind": "memo",
    "title": "Mandatory training on the new records management system",
    "orgs": [
      "{city} Municipal Services",
      "Coastal Regional District Administration"
    ],
    "senderTitles": [
      "Records and Information Manager",
      "Corporate Services Director",
      "IT Training Lead"
    ],
    "subjects": [
      "Required training: new records system",
      "Records system training sessions, {date} to {date2}"
    ],
    "sections": [
      [
        "On {date3} we will retire the old shared drives and the paper filing index and move every department onto a single electronic records management system. Before that date, each staff member who creates, files or retrieves records must complete a half-day training session. This includes casual and part-time staff. Nobody will be given a login until they have attended.",
        "The new records management system goes live on {date3}. From that day forward, contracts, permits, council reports and correspondence will all be filed in one place, with proper version control and retention rules attached. Training is mandatory for all staff who handle records, and that covers far more of us than most people expect, including front counter staff and field supervisors."
      ],
      [
        "Sessions run in the computer lab on the lower level of city hall. Each one lasts about three and a half hours, with a short break in the middle. Groups are capped at twelve so the trainer can help people one on one. Morning sessions start at {time}, and afternoon sessions start after lunch on the same days.",
        "Training will be delivered in small groups of no more than ten in the second-floor boardroom, which has been set up with laptops. Each session covers the same material, so pick the one that suits your schedule. Please arrive five minutes early so you can log in to the practice environment before the trainer starts the first exercise."
      ],
      [
        "To book a seat, use the sign-up sheet on the staff intranet under the Corporate Services tab. Talk to your supervisor before you choose a time so your department is not left short on a busy day. If every session that fits your schedule is full, add your name to the waiting list and we will contact you directly.",
        "Supervisors have been asked to book their own staff into sessions so that coverage is planned ahead of time. You should receive a calendar invitation within the next week. If you do not, or if the time you were given clashes with a site visit or a council meeting, contact {p1} in records and {p1_he} will move you to another slot."
      ],
      [
        "The training starts with the basics: how to log in, how the folder structure is organized, and how to save a document with the right metadata. You will then practise searching for records by keyword, date range and file number. The last hour focuses on access permissions, so you understand who can see what and why.",
        "Much of the session is hands-on. You will file a sample building permit, attach a few photos, and then try to find it again using three different kinds of search. The trainer will also show you how the system handles drafts, how to declare a final version, and what happens when a document reaches the end of its retention period."
      ],
      [
        "Please bring a real example from your own work, such as a recent letter or a spreadsheet you update each month. Working through your own files makes the session far more useful than generic examples. You do not need to bring a laptop, but you may want a notepad, since the quick-reference guide will only be handed out at the end.",
        "There is no test at the end, but you will be asked to complete a short practical exercise before you leave, such as filing an email with an attachment. This is simply to confirm your account is working and that you can save records correctly. Most people finish it in under ten minutes, and the trainer is there to help if you get stuck."
      ],
      [
        "Staff in the field, including parks crews and bylaw officers, will not be left out. A shorter session focused on the mobile app is being offered at the {city2} works yard. It covers uploading photos, adding location notes and closing out an inspection record from a tablet. Ask your foreman about which crew is scheduled for which morning.",
        "We understand that some teams, especially utilities and the fire department, cannot leave their posts for half a day. For those groups, our trainer, {p2}, will deliver the material on site in two shorter blocks. These sessions will be arranged directly with each department head, so watch for a separate message from your manager about dates."
      ],
      [
        "After go-live, the old drives will become read-only for ninety days and then be archived. Anything you still need from them should be moved into the new system before then. A small team from records will be available to help departments migrate large folders, but they need at least two weeks' notice to plan the work.",
        "Help will not end when training does. For the first month after launch, a records specialist will sit in the main office every morning to answer questions in person. You can also submit a help desk ticket at any time. The most common questions so far are about naming conventions, so please review the quick guide before you start filing."
      ],
      [
        "Thank you for making time for this. Good records protect the city when decisions are challenged and save everyone time when a resident asks for a document. The new system will feel unfamiliar at first, but it should put an end to hunting through six shared drives for the latest version of a single file.",
        "We know another system means another password and another set of buttons to learn. The difference this time is that the work you do now will make it much easier to answer freedom of information requests and to find old files quickly. Thank you in advance for your patience and for any feedback you share after your session."
      ]
    ],
    "details": [
      "Attendance is tracked in the HR learning portal under course code \"RMS-101\"; staff who have not completed it by {date2} will have their shared-drive access reduced to read-only, per policy No. {ref} (contact: {p1}).",
      "Field sessions at the {city2} works yard ({street}) run from {time} to {time2}; crews should bring their assigned tablet, a charged battery pack and their employee No. for login.",
      "Retention schedules (e.g., \"7 yrs after closure\" for permits) are applied automatically; questions about exceptions should go to {p1} at ext. {number} or {email}, quoting file {ref2}.",
      "Approx. {bignumber} documents remain on the old S: and T: drives; departments that need migration help must submit a request form to records by {date}, including a folder list and an estimated size in GB, ref. {ref2}.",
      "The vendor, {company}, will provide on-site support during the launch week of {date3}; their technician, {p3}, will be stationed in Rm. 104 (beside the mailroom) each morning.",
      "Staff who miss a booked session without notice will be charged back to their department at {amount} per seat; rescheduling is free if done at least {number} business days ahead of {date}.",
      "The quick-reference guide (version 2.1, {number2} pages, laminated) covers naming rules such as \"YYYY-MM-DD_Dept_Subject\" and will be handed out by {p2} at the end of each session on {date}.",
      "Freedom of information (FOI) requests received after {date3} will be searched only in the new system; FOI coordinator {p2} can be reached at {phone} for urgent requests, ref. {ref}."
    ]
  },
  {
    "id": "b03-network-outage-review",
    "kind": "report",
    "title": "Post-mortem on a weekend network outage",
    "orgs": [
      "{city} Regional Health Administration",
      "Island Shared Technology Services"
    ],
    "senderTitles": [
      "Network Operations Lead",
      "Manager, Infrastructure Services",
      "IT Service Continuity Analyst"
    ],
    "subjects": [
      "Post-incident review: weekend network outage",
      "Outage report, incident {ref}"
    ],
    "sections": [
      [
        "This report reviews the network outage that affected the main office and two satellite sites over the weekend of {date}. Staff at the affected locations lost access to email, shared files and the internal phone directory for most of Saturday. Public-facing services stayed online because they are hosted off site. The review was led by the infrastructure team and covers cause, impact and corrective actions.",
        "Between Saturday morning and early Sunday, staff across the head office lost network access. The first alert came from an automated monitor at {time}, and the on-call technician confirmed the problem within twenty minutes. This document records the timeline as reconstructed from system logs and staff interviews, the root cause, the effect on operations, and the steps taken to prevent a repeat."
      ],
      [
        "The root cause was a failed firmware update on the core switch in the main server room. The update had been scheduled automatically by the vendor's management portal, which nobody on the team realized was still enabled. When the switch restarted, it loaded a corrupt configuration and stopped passing traffic between floors. The backup switch did not take over as designed.",
        "Logs show that a power supply in the primary core switch failed shortly before the outage began. The second power supply should have carried the load, but it had been unplugged during cable work two weeks earlier and never reconnected. A contractor's work ticket for that job was closed without the standard checklist being signed. The switch then shut down completely."
      ],
      [
        "The on-call technician, {p1}, arrived on site within an hour and found the switch lights showing a fault pattern. {P1_he} first suspected a power problem, which cost some time. After calling the vendor's support line, the team identified the firmware issue and began restoring the previous version from a saved copy. That process took several hours.",
        "When {p1} reached the server room, {p1_he} noticed the primary switch was dark and that the standby unit was showing link errors. The standby had not been tested under full load since it was installed. Rather than risk a second failure, the team chose to move the most critical connections by hand to a spare switch kept in storage."
      ],
      [
        "Impact was mostly internal. About two hundred staff working weekend shifts could not reach shared files or print. The scheduling office switched to paper sign-in sheets, and the facilities team used personal phones to coordinate. No client records were lost, and no data was found to be corrupted when systems came back online. Several staff reported working blind for the afternoon.",
        "The finance office was the hardest hit, because a payroll file transfer to the bank was due that afternoon. The transfer was completed late, but within the bank's cutoff window. Front-desk staff at the satellite site in {city2} could not check in visitors electronically and kept a written log instead. No security cameras were affected, since they run on a separate network."
      ],
      [
        "Communication during the outage was weaker than it should have been. Because email was down, the team relied on a phone tree that had not been updated in over a year. Several managers were not called, and some heard about the problem only when they arrived on Monday. One supervisor reported learning about it from a building security guard.",
        "Staff were told about the outage through text messages sent from the emergency notification service, which worked well. However, the messages did not say how long the outage was expected to last, and several staff made repeated calls to the help desk asking for updates. A single status message every two hours would have prevented most of those calls."
      ],
      [
        "Service was fully restored late Saturday night, and the team stayed on site until early Sunday to watch for further problems. A follow-up check on Monday morning confirmed all printers, phones and shared drives were working. A small number of laptops needed a restart to reconnect, which the help desk handled as tickets came in.",
        "Most systems were back online by early evening, but the internal phone system took longer because its configuration had to be reloaded by the vendor. Full service was confirmed on Sunday afternoon after a final test of every floor. The help desk opened a batch ticket to track any lingering problems reported on Monday, and only a handful were received."
      ],
      [
        "The review identified four corrective actions. Automatic firmware updates have been switched off on all network equipment, and future updates will go through the change board. The standby switch will be load-tested every quarter. The phone tree has been moved into the notification service. Finally, a spare core switch has been ordered so one is always ready.",
        "Several changes have already been made. Both power supplies on every core device are now checked as part of the weekly server room walk-through. Contractor work tickets cannot be closed until a staff member signs off on the checklist. The team has also written a short outage message template so status updates can go out quickly and consistently."
      ],
      [
        "The team noted that the outage, while disruptive, could have been far worse on a weekday. The response showed good problem solving under pressure, but also showed how much depends on one or two people knowing the equipment. Cross-training for a second technician on core network devices has been scheduled for next quarter.",
        "Overall, the review found that the technical failure was preventable and that the response was reasonable once the cause was understood. Staff were patient and found practical workarounds. A follow-up review will be held in three months to confirm that each corrective action has been completed and is working as intended."
      ]
    ],
    "details": [
      "Monitoring logs show the first \"link down\" alert at {time} on {date}, with the core switch (asset tag {ref}) reporting a fault code of 0x3F; service desk ticket No. {ref2} was opened approx. 14 minutes later.",
      "The vendor, {company}, confirmed by phone at {time2} that firmware build 9.4.2 had a known defect; a replacement image was e-mailed to {p1} and applied before {date2}.",
      "Approx. {bignumber} internal phone extensions were unreachable; staff at the {city2} site (located at {street}) used a single analog line, ext. {number}, as a backup for the duration.",
      "Estimated cost of the outage, including overtime for {number} technicians and an after-hours vendor callout, is {amount}; this excludes the replacement switch, quoted at {amount2} by {company2}.",
      "Interview notes: {p2} (facilities) reported that the server room door was found propped open on {date}; this was not confirmed by the access-control log and is being reviewed separately under file {ref2}.",
      "Corrective action No. 3 (\"load-test standby switch quarterly\") is assigned to {p3}, with the first test scheduled for {date3} between {time} and {time2} during the low-traffic maintenance window.",
      "Of the {number2} help desk tickets logged on Monday, most (approx. {percent}) were laptop reconnection issues; all were closed by {time2} without escalation to tier-two support, per ticket summary {ref}.",
      "The emergency notification service sent {number} text alerts to {bignumber} staff; delivery receipts confirm a {percent} success rate, with failures traced to out-of-date mobile numbers in the HR database."
    ]
  },
  {
    "id": "b04-office-relocation",
    "kind": "memo",
    "title": "Office relocation and moving day logistics",
    "orgs": [
      "{city} Community Services Society",
      "Harbourview Land Title Consultants"
    ],
    "senderTitles": [
      "Facilities Coordinator",
      "Office Manager",
      "Director of Administration"
    ],
    "subjects": [
      "Moving day plan for the new building",
      "Office move on {date2}: what to expect"
    ],
    "sections": [
      [
        "Our move to the new building at {street} is now confirmed for the weekend of {date2}. The lease on the current office ends at the close of that month, so there is no room to push the date back. This memo covers packing, what the movers will and will not handle, parking at the new site, and what your first Monday will look like.",
        "After two years of planning, we are finally moving. The new office is brighter, fully accessible, and close to the bus loop, and it gives every team more space than we have now. The movers have been booked for the weekend of {date2}. Please read this memo carefully, because a smooth move depends on everyone doing a small share of the work ahead of time."
      ],
      [
        "Packing supplies will be delivered to each floor next week. Each person will get six flat boxes, a roll of tape and a sheet of coloured labels. Your label colour matches the zone you are moving to on the new floor plan. Please write your name and new desk number on every box, on the side rather than the top, so it can be read when boxes are stacked.",
        "Boxes, tape and labels will be stacked in the copy room starting Monday. Take what you need, but please do not take more than eight boxes until everyone has had a chance. Each box should be no heavier than you could comfortably carry yourself. Books and binders go in small boxes; lighter items like lamp shades and pillows can go in large ones."
      ],
      [
        "The movers, {company}, will handle desks, filing cabinets, chairs, computers and all packed boxes. They will not move plants, personal artwork, food, or anything valuable such as cameras or cash. Please take those items home or bring them to the new office yourself. Fridges in the kitchens must be emptied and cleaned by the Thursday before the move.",
        "Our moving company will take care of furniture, packed boxes and IT equipment, but some things must travel with you. These include keys, personal medication, small electronics, and anything confidential that is not already in a locked cabinet. Locked cabinets will be moved as they are, so leave the keys with {p1} in an envelope marked with the cabinet number."
      ],
      [
        "Computers will be disconnected by the IT team on Friday afternoon. Do not unplug your own equipment. Simply log off, leave your monitor, keyboard and mouse on the desk, and IT will tag and pack them. Laptops should go home with you over the weekend and come with you on Monday morning, along with their chargers and docking cables.",
        "Please shut down your computer at the end of the day on Friday and leave it where it is. The IT team will label every cable and pack each workstation themselves, which means everything should reconnect correctly on Monday. If you use special equipment, such as a sit-stand desk converter or an ergonomic keyboard, add a coloured tag to it so it reaches the right desk."
      ],
      [
        "Parking is the biggest change. The new building has an underground lot with forty stalls, which is fewer than we use now. Stalls will be assigned first to staff with accessibility needs and to those who drive for work. Everyone else is encouraged to use the bus, which stops right outside, or the secure bike room on the ground floor.",
        "Unlike our current lot, parking at the new site is not free. Monthly passes for the underground lot can be bought through payroll deduction. There is also street parking with a two-hour limit nearby, but bylaw officers check it often. A covered bike cage with charging outlets for e-bikes is available at no cost to staff, along with showers and lockers."
      ],
      [
        "On moving day itself, staff do not need to be on site. The office will be closed to clients on Friday afternoon, and phones will be forwarded to the main voicemail. A small team of volunteers will be at the new building on Sunday afternoon to check that every box has landed in the right zone. Pizza will be provided for anyone who helps.",
        "The old office will close to the public at noon on Friday. A sign will be posted on the door with the new address and a map. {p2} will be at the new building throughout Saturday to meet the movers and answer their questions. If you want to drop off personal items early, the building will be open on Sunday afternoon for two hours."
      ],
      [
        "On Monday, please arrive at the main entrance, where reception will hand out your new key fob and a floor plan. Your workstation should be set up and ready, but take a few minutes to check that your phone has a dial tone and your monitor is working. Report any problems to the help desk right away rather than waiting until the afternoon.",
        "Your first day in the new office will start with a short welcome in the lunchroom at nine. We will walk through fire exits, the muster point, and how the new door access works. After that, unpack at your own pace. IT and facilities staff will walk the floors all morning to fix anything that did not arrive as expected."
      ],
      [
        "Moving is stressful, even when the destination is better. Thank you for your patience and for the extra effort over the next few weeks. If something in this plan does not work for you, or if you have a question we have not answered, please come and talk to the facilities team in person rather than waiting until moving day.",
        "We are grateful to everyone who helped choose furniture, test chairs, and plan the floor layout. The new space was designed with your feedback in mind. Please hold onto this memo and check the staff intranet, where we will post updates, a final box count, and photos of the finished office before the move."
      ]
    ],
    "details": [
      "Key fobs for the new building ({street}) will be issued by {p1} at reception between {time} and {time2} on {date2}; lost fobs will be replaced for a fee of {amount} each.",
      "The movers, {company}, have quoted {amount} for the weekend job (approx. {number} trucks, crew of {number2}); any items left untagged after Friday will be held in Rm. B-12 until claimed.",
      "Underground parking passes cost {amount2} per month by payroll deduction; stalls P-01 through P-06 are reserved for staff with an approved accommodation (form HR-22, file {ref}), as allocated by {p3}.",
      "Phones will be forwarded to the main voicemail box (ext. {number}) from noon on {date} until {time} on {date3}; urgent client calls should be directed to {p2} at {phone}.",
      "Confidential files (e.g., client intake forms, payroll binders) must travel in the locked grey bins supplied by {company2}; each bin carries a numbered seal, logged on sheet {ref2} by {p1}.",
      "The old building at {street2} must be broom-clean by {date3}; the landlord's inspector, {p3}, will walk through with our facilities team and note any damage beyond normal wear-and-tear.",
      "Staff commuting from {city2} (approx. {km} each way) may apply for a one-time transit pass subsidy of {amount}; forms are due to payroll by {date2} and must include a receipt.",
      "Box labels are colour-coded by zone: \"blue\" for finance, \"green\" for programs, \"orange\" for reception; boxes with no label or desk No. will be set aside in the loading bay at {street} on {date2} until {time}."
    ]
  },
  {
    "id": "b05-safety-committee-summary",
    "kind": "report",
    "title": "Joint health and safety committee meeting summary",
    "orgs": [
      "{city} Transit Operations",
      "Coast Mountain Distribution Ltd."
    ],
    "senderTitles": [
      "Committee Co-Chair",
      "Health and Safety Coordinator",
      "Recording Secretary"
    ],
    "subjects": [
      "JHSC meeting summary, {date}",
      "Safety committee minutes: ergonomics and a near-miss"
    ],
    "sections": [
      [
        "The joint health and safety committee held its regular monthly meeting on {date} in the second-floor training room. Six of the eight members attended, which met quorum. The worker co-chair, {p1}, chaired the meeting. Main topics were ergonomic complaints from the administration office and a near-miss at the loading dock reported earlier in the month.",
        "The committee met on {date} with both co-chairs and four other members present. One management member sent regrets and one worker seat remains vacant following a retirement. Minutes from the previous meeting were reviewed and approved without changes. The agenda focused on two items: workstation ergonomics and a near-miss involving a forklift and a pedestrian."
      ],
      [
        "Since the last meeting, the committee received five written concerns from office staff about neck and shoulder strain. Most came from people who moved to the new open-plan area in the spring. Committee members inspected the area and found that many monitors sat too low and that several chairs could not be adjusted because the levers were broken.",
        "Ergonomic complaints have increased since the accounting team began working full days on laptops without separate monitors. Staff reported wrist pain and eye strain, particularly late in the day. The committee noted that some employees had stacked books under their laptops as a workaround. Two staff had already visited their own physiotherapists and asked whether costs could be covered."
      ],
      [
        "The committee recommended that every office worker receive a basic workstation assessment within the next two months. A trained member from each department will carry these out using the provincial checklist. Management agreed to replace broken chairs and to buy monitor arms for anyone who needs them. A budget request has been submitted for approval.",
        "Management members agreed to order external monitors, keyboards and mice for the accounting team. The committee also asked that a short ergonomics refresher be included in the next staff meeting. {p2}, who completed an ergonomics course last year, volunteered to lead it and to follow up with anyone still reporting discomfort after the new equipment is installed."
      ],
      [
        "The near-miss occurred at the east loading dock during the late afternoon. A forklift operator was reversing out of a trailer when a staff member from the office walked behind the machine to reach the parking lot. The operator saw the pedestrian in the mirror and stopped in time. Nobody was hurt and no product was damaged.",
        "According to the incident report, a driver from an outside carrier stepped down from the cab and walked across the dock while a forklift was moving loaded pallets. The forklift operator braked sharply and the pallet shifted but did not fall. The driver was not struck. The supervisor on duty stopped work in that area for about fifteen minutes."
      ],
      [
        "The committee reviewed the area and found that the painted walkway near the east door had faded badly and was hard to see. There is also no physical barrier between the walkway and the forklift lane. Several members noted that office staff often use the dock as a shortcut to the lot because the front door is farther away.",
        "During the walk-through, members observed that the dock has no signage telling visiting drivers where to wait. The driver involved told the supervisor that nobody had explained the rules on arrival. Members also noted that the forklift's backup alarm was working, but it was hard to hear over a nearby compressor that runs constantly in the afternoon."
      ],
      [
        "Recommendations from the near-miss review include repainting the walkway in high-visibility yellow, installing a short barrier rail along the forklift lane, and adding a sign at the office door stating that the dock is not a public route. The committee also asked that the incident be discussed at the next shipping crew toolbox talk.",
        "The committee recommended a marked waiting area for visiting drivers, with a sign in plain language and pictures. Carriers will receive a one-page safety sheet with their delivery confirmations. A blue warning light will be added to each forklift so pedestrians can see it approaching. The compressor will be moved or enclosed to reduce noise near the dock."
      ],
      [
        "Under other business, members discussed winter preparation. Salt bins need restocking, and the north stairwell light has been out for two weeks. Facilities agreed to fix the light before the end of the week. A member also raised the question of first aid coverage on weekend shifts, which will be reviewed before the next meeting.",
        "Members briefly reviewed the first aid log, which showed minor cuts and one sprained ankle since the last meeting, all treated on site. The committee also confirmed that the annual fire drill is due next month. The drill will be unannounced, but supervisors will be told in advance so they can account for visitors and contractors."
      ],
      [
        "Action items will be tracked on the committee board in the lunchroom, with names and target dates beside each one. The next meeting is scheduled for the second Tuesday of next month. Staff who have a concern they want raised may speak with any committee member or place a note in the box outside the safety office.",
        "The meeting adjourned after about ninety minutes. All action items have been assigned to a named member, and progress will be reviewed at the next meeting. A copy of these minutes will be posted on the safety board and sent to the general manager. Employees are reminded that they can report hazards anonymously if they prefer."
      ]
    ],
    "details": [
      "Near-miss report No. {ref} was filed by {p3} at {time} on {date}; the forklift (unit FL-07, propane, approx. 2,200 kg rated capacity) was tagged out for a brake check until {date2}.",
      "Ergonomic assessments will follow the WorkSafeBC \"Office Ergonomics\" checklist; {number} staff have been trained as assessors by {p2}, and all reviews must be logged in the safety binder by {date3}.",
      "Management approved {amount} for replacement chairs and monitor arms from our supplier, {company}; delivery is expected by {date2}, with installation scheduled between {time} and {time2}.",
      "The east-dock walkway (approx. {number2} metres long) will be repainted in high-visibility yellow by {company2}; the work requires a {number}-hour closure, to be posted at least {number2} days in advance.",
      "Action item No. 4 (\"enclose compressor C-2\") is assigned to {p2}; estimated cost is {amount2}, and noise readings (dBA) will be retaken by the coordinator after completion, ref. {ref2}.",
      "Members present: {p1} (worker co-chair), {p2} (management co-chair), {p3} (recording secretary), and {number} others; quorum was confirmed at {time} and the meeting closed at {time2}.",
      "Visiting carriers will receive a one-page sheet titled \"Dock Safety: Read Before You Unload\"; copies will be e-mailed with each booking confirmation from {date2} and posted at the {street} gate by {p3}.",
      "The first aid log for the period ending {date} lists {number} entries, none requiring medical aid off site; the attendant on weekend shifts may be reached at {phone} or ext. {number2}."
    ]
  },
  {
    "id": "b06-dispatcher-trainee-offer",
    "kind": "letter",
    "title": "Offer of employment for a dispatcher trainee",
    "orgs": [
      "{city} Emergency Communications Centre",
      "Mid-Island 911 Dispatch Services"
    ],
    "senderTitles": [
      "Human Resources Advisor",
      "Manager, Recruitment and Training",
      "Director of Operations"
    ],
    "subjects": [
      "Offer of employment: dispatcher trainee",
      "Your offer letter, competition {ref}"
    ],
    "sections": [
      [
        "I am pleased to offer you the position of dispatcher trainee with our centre, following your interviews and the skills assessment you completed last month. The selection panel was impressed by your calm answers during the scenario questions and by your experience working the front desk at a busy veterinary clinic. We believe you will do well on the floor.",
        "On behalf of the hiring panel, I am happy to confirm that you have been selected for a dispatcher trainee position. Competition for this intake was strong, with many applicants for a small number of seats. Your references spoke highly of your reliability and of the way you handled difficult customers in your previous job, and that weighed heavily in our decision."
      ],
      [
        "Your start date is {date2}. Please report to the main reception at {time} on that day, where you will be met by your training coordinator. The first morning will be spent on paperwork, a building tour, photo identification and setting up your computer accounts. Wear business casual clothing for the first two weeks; uniforms will be issued after that.",
        "We would like you to begin on {date2}. Your first day starts at {time} in the training room on the lower level. Please bring two pieces of government identification, a void cheque or direct deposit form, and your signed copy of this letter if you have not already returned it. Parking for that first day will be in the visitor lot by the front entrance."
      ],
      [
        "This is a full-time, permanent position, subject to a probationary period of six months from your start date. During probation, your supervisor will meet with you every month to review your progress, discuss feedback and set goals. At the end of probation, you will receive a written evaluation and, if successful, confirmation of your permanent status.",
        "Like all new hires, you will serve a probationary period. For dispatcher trainees, it lasts until you have finished classroom training and completed at least three months of independent work on the floor. Most trainees reach that point within eight to ten months. Throughout probation, you will receive regular written feedback so there are no surprises about where you stand."
      ],
      [
        "Training begins with six weeks in the classroom. You will learn call-taking protocols, radio procedures, local geography, and how to use our computer-aided dispatch system. Each week ends with a written quiz and a practical exercise. After the classroom phase, you will move to the floor and work side by side with a certified communications officer.",
        "Your training program combines classroom learning with supervised work. In the first phase, you will practise answering simulated calls, entering incidents, and using the radio console in our training lab. You will then sit beside an experienced trainer, {p1}, who will gradually hand over more calls to you as your confidence grows. {P1_he} has trained new staff for many years."
      ],
      [
        "As a trainee, your starting rate of pay is set by the collective agreement and will increase when you are certified and again at each anniversary. You will be eligible for extended health and dental benefits after three months. Vacation is earned from your first day, although we ask that new staff not book time off during the classroom phase.",
        "Your wages, benefits and hours of work are covered by the collective agreement, a copy of which is enclosed. You will join the union as a condition of employment. Benefits begin after your first full month, and the pension plan is available from day one. Shift premiums apply once you begin working evenings, nights and weekends on the floor."
      ],
      [
        "This offer is conditional on a satisfactory criminal record check, a hearing test, and confirmation of your typing speed in a supervised setting. Our records clerk, {p2}, will contact you within the next few days to arrange these. Please let {p2_him} know as soon as possible if you need any accommodation during the testing process.",
        "Before your start date, you must complete an enhanced security screening, which includes fingerprints and a background interview. You will also need a current first aid certificate. If yours has expired, we can enrol you in a course at our cost. Please note that the offer may be withdrawn if the security screening is not completed successfully."
      ],
      [
        "Dispatch work is rewarding, but it can also be stressful. Our centre has a peer support team and an employee assistance program that you can use at any time, for yourself or your family, free of charge. Your trainer will also introduce you to the team on your first floor shift so you have familiar faces from the start.",
        "We take staff wellness seriously. New dispatchers are paired with a peer mentor outside their training chain, someone who can answer the questions you may not want to ask a supervisor. You will also attend a half-day workshop on managing the stress of difficult calls before you take any emergency calls on your own."
      ],
      [
        "To accept this offer, please sign and return one copy of this letter by {date}. If you have any questions about the terms, the training schedule or the conditions above, call me directly at {phone}. We are excited to welcome you to the team and look forward to seeing you on your first day.",
        "Please confirm your acceptance by signing the attached copy and returning it to me by {date}, either by email or in person. If anything in this letter is unclear, I would be glad to talk it through with you. Congratulations, {r_title}, and welcome to the centre. We look forward to working with you."
      ]
    ],
    "details": [
      "Your starting wage is {amount} per hour (Step 1, Communications Officer Trainee, Schedule \"B\"), rising to {amount2} per hour upon certification, as set out in Article 22 of the agreement, ref. {ref}.",
      "Security screening appointments are held at the {city2} detachment ({street}) on weekdays between {time} and {time2}; bring two pieces of photo ID and your file No. {ref2}.",
      "The classroom phase (approx. {number} weeks) runs from {date2} to {date3}; attendance is mandatory, and any absence must be reported to {p1} before {time} at {phone}.",
      "Required documents: (1) signed offer letter; (2) direct-deposit form; (3) TD1 and TD1BC tax forms; (4) proof of first aid, e.g. \"Standard First Aid with CPR-C\", to be returned to {email} by {date}, quoting file {ref}.",
      "The hearing test (pure-tone audiometry, both ears) will be booked by {p2} with our provider, {company}, and must be completed at least {number2} days before {date2}.",
      "Your trainee cohort includes {number} new hires; you will be assigned to Platoon \"C\" under supervisor {p3} once the floor phase begins, approx. {number2} weeks after classroom training ends.",
      "A relocation allowance of up to {amount} is available for new hires moving more than {km}; receipts (e.g., truck rental, fuel) must be submitted within {number} days of {date2}, quoting {ref}.",
      "Your typing speed must be confirmed at a minimum of {number} net words per minute in a supervised retest, scheduled on {date} at {time} in the training lab (Rm. L-04)."
    ]
  },
  {
    "id": "b07-headsets-and-chairs",
    "kind": "email",
    "title": "Purchase approval and delivery of headsets and chairs",
    "orgs": [
      "{city} Customer Contact Centre",
      "Island Utilities Customer Service"
    ],
    "senderTitles": [
      "Procurement Officer",
      "Contact Centre Manager",
      "Purchasing and Facilities Lead"
    ],
    "subjects": [
      "Headsets and chairs approved",
      "PO {ref}: headset and chair delivery"
    ],
    "sections": [
      [
        "Good news on the equipment request you sent in last quarter. The finance committee approved the purchase of new headsets and task chairs for the call centre at its meeting this week. The approval covers every agent position on the floor plus a small number of spares. I wanted to give you the details now so you can start planning the rollout with your supervisors.",
        "I am writing to let you know that your request for new headsets and chairs has been approved in full. The business case you put together, especially the list of repair tickets and the comments from agents about back pain, made a strong impression. The purchase order went out to the suppliers yesterday afternoon, and I have both confirmations in hand."
      ],
      [
        "For headsets, we went with a wireless, dual-ear model with noise cancelling on the microphone. Several agents tested three options in the spring, and this one scored best on comfort over a long shift. Each headset comes with two sets of ear cushions, so agents can swap them out for hygiene reasons without sharing.",
        "The headsets are a wired, binaural model with a quick-disconnect cable, which means agents can stand up and step away from the desk without taking the headset off. We chose wired over wireless because the battery issues with the old units caused so many dropped calls. They also come with leatherette and fabric cushions, so people can pick what feels best."
      ],
      [
        "The chairs are a fully adjustable model rated for 24-hour use, which matters because some positions are shared across three shifts. Seat depth, armrest height and lumbar support can all be adjusted without tools. The supplier has offered a ten-year warranty on the frame and mechanism, and five years on the fabric.",
        "For seating, we selected a mesh-back chair with adjustable lumbar support, seat slider and armrests that move in four directions. It is rated for continuous use and for users up to a higher weight limit than our current chairs. A few larger and smaller sizes are included in the order so that everyone can find a good fit."
      ],
      [
        "Delivery is scheduled for {date2}. The chairs will arrive first thing in the morning and the headsets later in the day. Because the chairs come assembled, they will take up a lot of room, so I have arranged for the training room to be used as a staging area until each one is placed at a desk. Please let the supervisors know.",
        "The supplier will deliver everything on {date2}, using the rear loading door. Our furniture vendor, {company}, will unpack and assemble the chairs on site and take away all packaging. The old chairs will be collected the same day and sent to a recycler. Headsets will arrive in a separate shipment by courier and will be held in the IT office."
      ],
      [
        "We should plan the switch carefully to avoid disrupting calls. My suggestion is to swap chairs during the quieter overnight hours and to roll out headsets one team at a time over two days. IT will need to pair each headset with its phone and test it before an agent uses it on a live call. I have asked {p1} to coordinate the schedule.",
        "To keep the floor running, IT recommends replacing headsets in small batches during each team's training hour. Each agent will need about ten minutes to fit the headset, adjust the microphone and run a short test call. Chairs can be swapped as agents go on break. {p1} from IT has offered to put together a simple sign-off sheet to track which stations are done."
      ],
      [
        "It would help to have each agent spend a few minutes adjusting their new chair properly. The supplier is sending a representative to demonstrate the settings at two short sessions, one in the morning and one in the late afternoon. Anyone who cannot attend will get a laminated card at their desk with step-by-step pictures.",
        "Please remind your supervisors that a new chair only helps if it is set up correctly. I have asked the supplier for a short video on adjusting the chair, which we can play on the screens in the break room. Our health and safety coordinator, {p2}, is also available for one-on-one adjustments if anyone is still uncomfortable after a week."
      ],
      [
        "The final cost came in slightly under budget, thanks to a volume discount and free delivery. The savings will be held in the equipment line for replacement cushions and spare cables over the next year. Finance has asked that we keep a simple asset list showing which headset serial number is assigned to which agent.",
        "On the budget side, the total cost is within the amount approved. The old headsets that still work will be kept as spares for the training room. Finance has asked for a short follow-up note after three months describing whether repair tickets and complaints have dropped, so it would be good to start tracking that now."
      ],
      [
        "Thanks again for pushing this request forward. I know the agents have been waiting a long time for better gear, and the repair tickets made the case for us. If the delivery date does not work for your floor schedule, let me know by {date} and I will ask both suppliers to adjust.",
        "Let me know if you have questions or if you would like me to join a team huddle to explain the rollout to the agents. I am in the office most days this week and can be reached by email at {email}. I hope the floor notices the difference right away, especially on the long evening shifts."
      ]
    ],
    "details": [
      "Purchase order No. {ref} covers {number} headsets and {number2} chairs from {company}; the total is {amount}, including freight, before GST and PST.",
      "Headsets must be paired with each phone (model IP-7841) by IT before use; {p1} has booked the floor between {time} and {time2} on {date2} for pairing and test calls.",
      "Old chairs (approx. {bignumber} kg in total) will be collected by our recycler, {company2}, on {date3}; the disposal fee of {amount2} is included in the PO under line item 6.",
      "The chair warranty covers the frame and gas cylinder for 10 yrs and the fabric for 5 yrs; claims must quote the serial No. on the underside, our account ref. {ref2}, and the delivery date of {date2} to {company}.",
      "Spare ear cushions (leatherette and fabric) are stored in the IT office, Rm. 2-14; agents may request a replacement set from {p1} by email to {email} or by calling ext. {number}.",
      "Agents who need a non-standard chair (e.g., \"petite\" or \"big and tall\" sizes) should tell {p2} by {date}; {number} units in each size have been added to the order.",
      "The supplier's representative, {p3}, will run two 20-minute demonstrations in the break room on {date2}, at {time} and at {time2}; attendance is optional but strongly encouraged.",
      "Finance expects a three-month follow-up by {date3} comparing repair tickets (baseline: {number} per month) and agent comfort scores; a drop of at least {percent} would be considered a success."
    ]
  },
  {
    "id": "b08-vacation-booking",
    "kind": "memo",
    "title": "Annual vacation booking process and blackout periods",
    "orgs": [
      "{city} Public Works Department",
      "Saltwater Ferries Terminal Operations"
    ],
    "senderTitles": [
      "Human Resources Coordinator",
      "Operations Superintendent",
      "Scheduling Supervisor"
    ],
    "subjects": [
      "Vacation bidding opens {date}",
      "Vacation requests and blackout periods for next year"
    ],
    "sections": [
      [
        "It is time to plan next year's vacation. The annual booking window opens on {date} and closes three weeks later. Requests submitted during this window are approved by seniority, so it is the best chance to secure the weeks you want. Requests sent in after the window closes will be approved on a first-come, first-served basis.",
        "Each fall, we ask staff to submit their vacation requests for the following calendar year so that we can plan crew coverage early. This year's booking round begins on {date}. Please read the steps below carefully. Several things have changed from last year, including the number of people allowed off at once and two new blackout periods."
      ],
      [
        "All requests must be made through the self-service portal. Paper forms and emails will no longer be accepted. Log in, choose the vacation tab, and select your first, second and third choices for each block of time. You can request up to three separate blocks in this round. Single days can be booked later in the year.",
        "To make a request, fill out the online form on the staff site. You will see a calendar showing how many people in your work group have already asked for each week. Weeks shaded in red are full. You may still ask for them, but you will be placed on a waiting list in seniority order behind anyone already listed."
      ],
      [
        "Within each work group, only a limited number of staff can be off at the same time. For most crews, that limit is two people per week. For the smaller trades groups, such as electricians and mechanics, the limit is one. These limits protect our ability to respond to breakdowns and emergency calls without relying on constant overtime.",
        "To keep operations running, no more than {number} people from each section may be on vacation in the same week. Supervisors will not approve requests that would leave a section below its minimum crew. If two people with the same seniority date ask for the same week, the tie will be broken by a draw held in front of a union steward."
      ],
      [
        "There are two blackout periods next year when vacation will not be approved except in special circumstances. The first is the two weeks around the spring paving start-up, when every crew is needed. The second is the first week of December, when we prepare for snow and ice season and complete winter readiness checks on the plows.",
        "Vacation will not be granted during the blackout periods listed on the attached calendar. These are the long weekend in May, the week of the regional fair, and the last two weeks of December. These are our busiest stretches, and in past years we have had to cancel service when too many people were away at the same time."
      ],
      [
        "If you have a special event during a blackout period, such as a wedding or a family reunion that cannot be moved, you can apply for an exception. Send a short written request to your manager, explaining the reason. Exceptions are reviewed case by case. They are not guaranteed, and approval in one year does not set a pattern for the next.",
        "We understand that life does not always fit a calendar. If you have a strong reason to be away during a blackout, talk to your supervisor as early as possible. Exceptions will be considered for things like a family member's wedding or a medical procedure. A shift trade with a coworker may also make an exception easier to approve."
      ],
      [
        "Once the window closes, supervisors will review the requests and send out decisions within two weeks. Approved vacation will appear in your calendar in the portal. If your request is denied, you will be told why and offered the closest open dates. Please check the portal yourself rather than waiting for a phone call.",
        "Results will be posted in the portal by the end of the following month. Approved vacation is firm unless an emergency forces us to cancel it, in which case the department will cover any non-refundable costs with proper receipts. If you need to cancel your own approved vacation, give at least two weeks' notice so the time can be offered to someone else."
      ],
      [
        "A reminder about carryover: you may carry no more than five days of unused vacation into next year. Anything above that will be paid out in March, which some people find disappointing. We would rather see you take the time. If you are close to the limit, plan your bookings now so you do not lose the chance to rest.",
        "Please check your vacation bank before you submit a request. The portal will show how many days you will have earned by the date of each request. If you book more days than you will have, the request will be flagged. Staff who reach a milestone anniversary next year will see their extra days added automatically."
      ],
      [
        "If you have questions about seniority, banked days or the portal, contact {p1} in human resources. {P1_he} is happy to sit down with you and walk through your options. Thank you for planning ahead. Good vacation planning keeps the work moving and gives everyone a fair shot at the time they want.",
        "Questions about this process can go to your supervisor or to {p1} in the scheduling office. Thank you for getting your requests in on time. It makes a real difference to everyone, especially those trying to plan summer holidays with family members who work elsewhere and need to book early."
      ]
    ],
    "details": [
      "The booking window runs from {time} on {date} to {time2} on {date2}; requests entered outside that period are stamped \"late\" and processed after all on-time requests, regardless of seniority.",
      "Blackout periods for next year: (a) {date} to {date2}, spring start-up; (b) the week of {date3}, winter readiness; exceptions require form HR-14 and approval from {p2}, file {ref}.",
      "Per Article 18.4 of the agreement, staff may carry over a max. of {number} days; any balance above that is paid out at straight time on the first pay date after {date3}, per bulletin {ref2}.",
      "Tie-breaking draws (if needed) will be held in the {city2} yard office at {street} on {date2} at {time}, with a union steward ({p3}) present to witness and sign the result sheet.",
      "The self-service portal (\"MyTime\") can be reached from home at the staff site; password resets are handled by the IT help desk at {phone} or ext. {number}, 24 hrs a day, starting {date}.",
      "Section minimums are listed on schedule {ref2}: e.g., Roads requires {number} operators per shift, Water requires {number2}, and Fleet Maintenance requires at least one licensed heavy-duty mechanic.",
      "Approved vacation cancelled by the employer will be reimbursed for non-refundable costs up to {amount}; claims must include receipts and be sent to {email} within {number} days.",
      "Staff with {number2} or more years of service will earn an additional week; {p1} estimates approx. {percent} of the department will reach a new vacation tier during the next calendar year."
    ]
  },
  {
    "id": "b09-admin-assistant-reference",
    "kind": "letter",
    "title": "Reference letter for a former administrative assistant",
    "orgs": [
      "{city} Family Law Group",
      "Westshore Engineering and Survey Ltd."
    ],
    "senderTitles": [
      "Office Administrator",
      "Managing Partner",
      "Senior Project Manager"
    ],
    "subjects": [
      "Reference for {p1}",
      "Letter of reference: administrative assistant"
    ],
    "sections": [
      [
        "I am writing to recommend {p1}, who worked as an administrative assistant in our office for just over four years. I was the direct supervisor for most of that time and saw the quality of the work up close, day after day. I am glad to give this reference, and I would hire {p1_first} again without hesitation if the right position opened up.",
        "It is my pleasure to provide a reference for {p1}, who was a member of our administrative team until earlier this year. The departure was on good terms, prompted by a move closer to family. We worked side by side almost every day during that period, so I can speak with real confidence about both skills and character."
      ],
      [
        "The role covered a wide range of tasks: managing calendars for three partners, preparing correspondence, booking meeting rooms, and greeting clients at the front desk. On busy days it also meant answering the main phone line. What stood out was how calmly {p1_first} handled competing demands without letting anything slip through the cracks.",
        "Our office is small, so the administrative assistant does a bit of everything: keeping the filing system in order, processing invoices, ordering supplies, and taking minutes at our weekly project meetings. {p1_first} also became our unofficial expert on the shared calendar software, and colleagues regularly came by with questions about scheduling or permissions."
      ],
      [
        "One example of initiative stands out. Our paper files had become badly disorganized after years of growth. Without being asked, {p1_first} proposed a new labelling system, spent several weekends sorting old boxes, and set up a simple index. Retrieval time for closed files dropped from days to minutes, and the system is still in use today.",
        "Shortly after joining us, {p1_first} noticed that we were paying for three separate courier accounts. A quick price comparison led to a single account and a simple sign-out sheet for packages. The change saved us a noticeable amount each year and ended a long-running problem with lost deliveries. That kind of practical thinking was typical."
      ],
      [
        "Computer skills are excellent. {p1_first} is fast and accurate at the keyboard, comfortable with spreadsheets and word processing, and quick to learn new programs. When we switched to a new billing system, {p1_first} was the first person on the team to master it and later trained two of our junior staff to use it properly.",
        "On the technical side, the work was highly capable. Written correspondence was clear and nearly free of errors, which matters a great deal in a legal or engineering office. {P1_he} prepared complex documents with tables and footnotes, and could format a lengthy report under deadline pressure without complaint or any drop in quality."
      ],
      [
        "Just as important, clients and coworkers liked {p1_first}. Clients often arrived stressed about court dates or deadlines, and {p1_first} had a gift for putting them at ease: remembering names, following up on small promises, and handling confidential information with complete discretion. In four years I never received a single complaint about conduct or attitude.",
        "People enjoyed working with {p1_first}. New staff found a patient and generous helper at the next desk, difficult days were met with good humour, and a looming deadline meant staying late without being asked. Confidentiality was taken seriously too, and I trusted {p1_first} completely with sensitive files, including personnel records and client financial information."
      ],
      [
        "Attendance was excellent and punctuality never an issue. Requests for time off came with plenty of notice, and someone else always knew where things stood. If I had to name an area for growth, it would be a tendency to take on too much rather than ask for help, a habit I suspect most good employers would welcome.",
        "If there is one thing to mention for balance, it is a streak of perfectionism that occasionally meant spending longer on a task than was strictly needed. In practice this rarely caused problems, and it meant that every letter leaving our office was polished. Attendance and reliability were outstanding throughout."
      ],
      [
        "I believe {p1_first} would be a strong fit for any role that calls for organization, good judgment and a steady manner with the public. {P1_he} learns quickly, owns up to mistakes, and works well with little supervision. Whatever the position, I expect a short settling-in period followed by real contributions to the team.",
        "I understand {p1_first} is now applying for positions with more responsibility, and I think the timing is right for that step. The patience, attention to detail and calm temperament I saw every day would suit a busy, fast-paced setting such as a dispatch centre, a hospital unit clerk role, or a senior office position."
      ],
      [
        "Please feel free to contact me if you would like to discuss this work history in more detail or ask about specific situations. I can be reached by phone at {phone} during regular office hours, and I am happy to answer any questions you may have. Thank you for taking the time to read this letter.",
        "If you have any questions, I would be glad to speak with you directly about the role and how it compares to the position you are filling. The best way to reach me is by email at {email}, and I will respond within one business day. Thank you for considering {p1} for this opportunity."
      ]
    ],
    "details": [
      "{p1} was employed from {date} to {date2} as Administrative Assistant II (full-time, 37.5 hrs/week); {p1_his} final salary was {amount} per year, per HR file {ref}.",
      "During {p1_his} tenure, {p1_he} processed approx. {bignumber} invoices and maintained the closed-file index for over {number} boxes stored off site at {street}.",
      "The courier consolidation (proposed by {p1} in {date}) reduced annual shipping costs from {amount} to {amount2}, a saving of roughly {percent}, according to our finance records.",
      "{p1} completed the \"Privacy in the Workplace\" course offered by {company} on {date2} and was our designated contact for records requests under the Personal Information Protection Act (PIPA).",
      "Supervisors during {p1_his} employment: {sender} (direct supervisor), {p2} (managing partner), and {p3} (office manager, until {date2}); any of us can be reached at {phone}.",
      "{p1} trained {number} new staff on the billing system, \"LexBill 9\", and wrote a {number2}-page quick guide that is still posted on our intranet under reference {ref2}.",
      "Our office, located at {street} in {city}, has {number} partners and approx. {number2} support staff; the administrative assistant role covers reception, billing, and records, e.g. file transfers.",
      "Reference checks may also be directed to our HR department at {email}; please quote file No. {ref} and allow up to {number} business days for a written reply."
    ]
  },
  {
    "id": "b10-warehouse-inventory-count",
    "kind": "report",
    "title": "Quarterly warehouse inventory count results",
    "orgs": [
      "{city} Building Supply Distribution Centre",
      "Pacific Rim Marine Parts Warehouse"
    ],
    "senderTitles": [
      "Inventory Control Supervisor",
      "Warehouse Manager",
      "Logistics Analyst"
    ],
    "subjects": [
      "Quarterly inventory count results",
      "Q3 cycle count and discrepancy report"
    ],
    "sections": [
      [
        "The quarterly physical inventory count was carried out on {date} at the main warehouse. Receiving and shipping were suspended for the day so the floor could be counted without stock moving. Counting teams of two worked through every aisle, the outdoor yard and the returns cage. This report summarizes the results, the discrepancies found, and the likely causes.",
        "A full count of warehouse stock took place over the weekend of {date}, with the building closed to orders. The count covered all racked inventory, bulk floor storage, and the mezzanine where small parts are kept. Results were compared with the quantities listed in the inventory system at the close of business the day before. Overall accuracy was slightly better than last quarter."
      ],
      [
        "Each team was given a printed count sheet listing bin locations but not expected quantities, so they would not be influenced by what the system said. Teams scanned bin labels and wrote counts by hand. Any count that differed from the system by more than a set amount was flagged and recounted by a second team before the end of the shift.",
        "Counters used handheld scanners loaded with a blind count file. After each aisle was finished, the supervisor, {p1}, reviewed the variances and sent a separate team to recount the largest ones. This two-step process caught several simple errors, such as a pallet counted twice and a case of fittings recorded in boxes instead of single units."
      ],
      [
        "Most of the warehouse matched the system closely. Lumber, roofing and drywall, which are counted by the bundle, showed almost no variance. The largest differences were in small, high-value items such as door hardware, power tool batteries and plumbing fittings. These items are easy to misplace and are often stored in mixed bins.",
        "Results were strong for large items. Outboard motors, trailers and anchor chain all matched the system exactly. Problems were concentrated in the small-parts area, especially impellers, fuses and stainless fasteners. Several bins held two different part numbers mixed together, which made counting slower and led to some of the differences recorded."
      ],
      [
        "Of the discrepancies, about half were explained during the review. In several cases, stock had been received and put away but not entered in the system until the following Monday. In others, items had been moved to a new bin without a transfer being recorded. Once these were corrected, the remaining shortage was much smaller.",
        "Several of the differences turned out to be paperwork problems rather than missing stock. Two customer returns had been placed back on the shelf without being credited in the system. A transfer to the {city2} branch had been shipped but not closed out. Correcting these entries resolved most of the overages and a portion of the shortages."
      ],
      [
        "A small number of shortages remain unexplained. The largest involves a case of cordless drill batteries that the system shows as received but that could not be found anywhere in the building. Security footage from the receiving door is being reviewed. Staff have been asked not to speculate about the cause until the review is complete.",
        "After all corrections, a handful of items are still short. The most significant is a group of marine electronics, including two depth sounders, which were last scanned into the secure cage. The cage log shows normal access by authorized staff only. The matter has been passed to the operations manager, {p2}, for follow-up with the loss prevention team."
      ],
      [
        "Damaged stock was also recorded during the count. Water had leaked from a roof drain onto a pallet of bagged insulation near the north wall, and several bags were torn and wet. The damaged bags were set aside and photographed for an insurance claim. Facilities has repaired the drain and checked the roof for other leaks.",
        "Counters found a number of items damaged by forklift contact, mainly boxes on the lowest rack level. Some packaging had been crushed, although the parts inside appeared intact. These items were moved to a quarantine shelf for inspection. The report also notes that several rack end protectors are missing and should be replaced before the next count."
      ],
      [
        "To reduce future discrepancies, the inventory team recommends three changes. Small, high-value items should move to a locked cage with sign-out. Receiving staff should enter stock the same day it arrives, even on weekends. Finally, mixed bins should be split so each bin holds only one part number, with clear labels at eye level.",
        "Recommendations include weekly cycle counts of the small-parts area rather than relying on the quarterly count alone. Returns should be inspected and credited before they go back on the shelf. The team also suggests a short refresher for staff on recording bin transfers, since many of the errors traced back to that one step being missed."
      ],
      [
        "The count was completed on schedule, and the counting teams worked carefully throughout a long day. Adjusted inventory figures have been posted to the system, and the finance team has been sent a summary for the quarter-end close. The next full count is planned for the end of the following quarter.",
        "Overall, the count showed that the warehouse is in good order, with most discrepancies caused by process gaps rather than loss. Corrected quantities have been entered and approved. Thanks go to all staff who stayed late to finish the recounts. A follow-up report on the unresolved shortages will be issued once the review is complete."
      ]
    ],
    "details": [
      "Overall inventory accuracy was {percent} by line item, up from last quarter; the net variance was {amount} at cost, against a total counted value of approx. {amount2}, per report {ref}.",
      "Count teams ({number} pairs) started at {time} and finished recounts by {time2}; {p1} signed off the final variance sheet, and copies were sent to finance at {email}.",
      "SKU 44-1087 (\"18V Li-ion battery, 5.0 Ah\") showed a shortage of {number} units; the receiving log lists PO {ref2} from {company} as received on {date2} by {p3}.",
      "Transfer No. {ref} to the {city2} branch ({street}) was shipped on {date} but not closed out; correcting it resolved {number2} of the overages recorded in aisle 14.",
      "Water-damaged stock (approx. {number} bags of R-20 insulation, plus {number2} cartons of fasteners) was photographed and reported to our insurer, {company2}, under claim No. {ref2}.",
      "Rack inspections found {number} missing end protectors in aisles 3 to 9; replacements have been ordered at {amount} each, with installation scheduled before {date3}.",
      "Unexplained shortages totalling {amount} have been referred to {p2} for review; access logs for the secure cage (door C-1) between {date} and {date2} are being compared with staff schedules.",
      "Beginning {date3}, small-parts bins (zones S1 to S4) will be cycle-counted weekly by {p3}; approx. {bignumber} locations will be split so that each bin holds a single part No., e.g. \"IMP-220\"."
    ]
  },
  {
    "id": "c01-burst-pipe-claim",
    "kind": "letter",
    "title": "Home insurance claim for water damage from a burst pipe",
    "orgs": [
      "Coastal Mutual Home Insurance",
      "{city} Harbourside Insurance Group"
    ],
    "senderTitles": [
      "Property Claims Adjuster",
      "Claims Coordinator",
      "Senior Field Adjuster"
    ],
    "subjects": [
      "Water damage claim {ref}",
      "Your burst pipe claim: next steps"
    ],
    "sections": [
      [
        "Thank you for reporting the water damage at your home on {street}. I have been assigned as the adjuster on your claim, and I will be your main contact from now until the file is closed. I understand a supply line burst in the laundry room and water reached the hallway and the finished basement before the main valve was shut off. I am sorry you are dealing with this.",
        "We received your call about the burst pipe, and your claim has been opened under file {ref}. My name is on this letter because I will be handling it personally. From your description, a copper line froze and split inside the wall behind the kitchen sink, and water ran down into the crawlspace and soaked the lower cabinets before your neighbour helped you find the shutoff."
      ],
      [
        "Before anything else, please keep doing what you can to limit further damage. Leave the main water valve off until a plumber has repaired the line. Pull wet rugs, cardboard boxes and books out of the affected rooms and set them somewhere dry. Reasonable costs to prevent more damage, such as renting fans, are normally covered, so keep every receipt, even small ones from the hardware store.",
        "Your policy expects you to take sensible steps to stop the damage from spreading, and we will reimburse those costs. If water is still sitting on the floor, a wet vacuum will do more than towels. Open closet doors and lift the bottom drawers out of dressers so air can move. If you hire a restoration company to bring in dryers, ask them to photograph moisture readings each day."
      ],
      [
        "I would like to inspect the damage in person on {date}, arriving at about {time}. The visit usually takes an hour. I will walk through each affected room, measure the wet areas, check the drywall and flooring with a moisture meter, and take photographs. It helps if the rooms are clear enough to reach the walls. If that time does not work, call me and we will find another slot that week.",
        "My site visit is booked for {date}. I will look at where the pipe failed, follow the path the water took, and test the subfloor and baseboards for hidden moisture. Some damage, like swelling under laminate, does not show right away, so I may lift a corner of flooring or pull a small section of trim. I will tell you before I touch anything and explain what I am checking."
      ],
      [
        "To move the claim forward, please gather a few documents. I will need the plumber's invoice that describes the cause of the leak, photos you took before cleanup began, and a list of damaged personal items with rough ages and prices. Original receipts are great if you have them, but bank statements or online order histories also work. Please do not throw out damaged items until I have seen them.",
        "There is some paperwork that will speed things up. Please send a copy of the repair bill for the pipe, any pictures or video from the day it burst, and a written list of belongings that were ruined, such as the washing machine, stored clothing or a bookshelf. For larger items, a model number or a photo of the label is very helpful. You can email everything to {email}."
      ],
      [
        "I should explain how your coverage applies. Sudden and accidental water escape, like a pipe that bursts without warning, is covered under your policy. Damage from a slow leak that went on for weeks is treated differently, which is why I check the cause carefully. Your deductible of {amount} will be taken off the final settlement rather than paid up front, so you do not need to send us anything.",
        "Under your policy, a burst pipe falls under sudden water damage, which is covered. What is not covered is repairing the pipe itself, so the plumber's labour for fixing the line will be your cost, while the damage the water caused is ours. Your deductible applies once per claim. I will show it clearly on the settlement summary so you can see exactly how the numbers were worked out."
      ],
      [
        "If the damage is extensive, we may bring in a restoration contractor, {company}, to dry the structure and replace drywall, insulation and flooring. You are free to choose your own contractor instead. If you do, I will need a written estimate before work starts so we can agree on the scope. Getting that agreement first avoids surprises when the final invoices arrive.",
        "Many of our clients prefer to use our approved repair network because the work carries a two-year workmanship guarantee and invoices go straight to us. You do not have to use them. Some people already have a trusted local builder, and that is fine. Whoever you choose, please make sure they take photos of the wall cavities before they close them up, since we cannot inspect anything once it is sealed."
      ],
      [
        "If the house becomes hard to live in during repairs, for example if the only bathroom or the kitchen is out of service, your policy includes additional living expenses. That can cover a motel, meals beyond your normal grocery costs, and extra mileage. Please talk to me before booking anything so I can confirm the limit and make sure the costs are approved. Keep all receipts in one envelope.",
        "Most water claims let people stay at home while repairs happen, but not always. If the drying equipment runs day and night or the floors are torn up, a short stay elsewhere may make sense. Your policy has a set amount for extra living costs. Call me first, and I can often arrange a direct billing with a hotel so you are not paying out of pocket."
      ],
      [
        "I know a claim like this disrupts your home, and I will try to keep things moving. You can reach me directly at {phone} on weekdays, and I return messages the same day where I can. Once I have the documents and finish the inspection, I expect to have a settlement offer ready within about two weeks. Thank you for your patience while we work through it.",
        "Please call me at {phone} if anything changes, such as new staining on a ceiling or a musty smell that was not there before, because those can point to water we have not found yet. I will send a written summary after my visit listing what was agreed. If you have questions about any part of the process, no question is too small to ask."
      ]
    ],
    "details": [
      "Per the field notes for file {ref}, moisture readings on the north basement wall were approx. 28% at {time} on {date}, against a dry baseline of 12% taken in the furnace room at {street}.",
      "The restoration crew from {company} installed {number} air movers and one low-grain refrigerant dehumidifier (serial No. LGR-7745), with daily readings logged until the target was reached on {date2}.",
      "Contents listed on the 'Schedule B' inventory include a front-load washer, two particleboard bookcases and approx. {number} boxes of stored textiles; total replacement cost claimed under file {ref} is {amount}, subject to depreciation.",
      "Please note: the policy deductible of {amount} applies once to claim {ref}, and the additional living expense limit (Section 4, 'Loss of Use') is capped at {amount2} unless approved in writing by {sender}.",
      "The plumber's invoice from {company2}, dated {date}, attributes the failure to a frost-split 1/2-inch copper supply line in an uninsulated exterior wall at {street}; the repair itself is excluded under clause 7(c).",
      "Asbestos testing of the drywall joint compound is required for homes built before 1990; samples were sent to the lab in {city} on {date} and results are expected by {date2}.",
      "The policyholder may reach the claims line at {phone} (ext. 214) or email {email}; please quote file {ref} and the loss address, {street}, in the subject line of every message.",
      "A follow-up inspection is booked for {date3} at {time2} to confirm the subfloor is dry before {company} reinstalls the vinyl plank flooring, baseboards and approx. {number2} linear metres of trim."
    ]
  },
  {
    "id": "c02-fridge-warranty",
    "kind": "email",
    "title": "Warranty repair on a refrigerator with parts on backorder",
    "orgs": [
      "{city} Appliance Repair Centre",
      "NorthIsle Home Appliance Service"
    ],
    "senderTitles": [
      "Service Coordinator",
      "Warranty Service Advisor"
    ],
    "subjects": [
      "Update on your fridge repair, {ref}",
      "Refrigerator warranty repair: parts delay"
    ],
    "sections": [
      [
        "Thanks for your patience since our technician visited on {date}. I wanted to give you a proper update on your refrigerator rather than leave you waiting by the phone. The diagnosis confirmed that the fridge side stopped cooling because the evaporator fan motor has failed, and the control board is showing an error code that points to the same problem. Both parts are covered under your warranty.",
        "I'm following up on the service call for your refrigerator. Our technician found that the sealed system is fine, which is good news, but the defrost heater has burned out. Without it, ice builds up on the cooling coils at the back of the freezer and blocks the cold air from reaching the fresh food side. That explains the warm milk and the frost you noticed."
      ],
      [
        "Here is the less welcome part. The manufacturer has the fan motor on backorder across Canada, and their latest estimate puts it in our hands by {date2}. We have checked with two other distributors and neither has stock. I know that is a long time to go without a working fridge, so I want to walk you through what we can do in the meantime.",
        "Unfortunately the replacement heater assembly is not available right now. Our supplier, {company}, tells us the factory shipment is delayed at the port, and they cannot promise a firm date yet. We have placed the order with priority status, which means your part goes out the day it arrives in their warehouse. I will call you as soon as I have a tracking number."
      ],
      [
        "We can lend you a small apartment-size fridge at no charge while you wait. It holds about a week of groceries for a couple and plugs into any regular outlet. Our delivery driver can drop it off and take it away again once the repair is done. Just reply with a morning or afternoon that suits you, and we will book it in.",
        "As a stopgap, we have a few loaner units available. The most popular choice is a chest freezer paired with a bar fridge, which together give you room for both frozen and fresh food. They fit in a garage or laundry room if your kitchen is tight. There is no cost and no deposit, and you keep them until your own unit is fixed."
      ],
      [
        "If you would rather not have a loaner in the house, your warranty also includes a food spoilage allowance. You can send us receipts for groceries that went bad, or simply a list with approximate prices, and we will reimburse you up to {amount}. Many people find the cooler and ice approach easier for a short wait, and we cover the ice too.",
        "Some customers prefer a different arrangement. Your extended warranty plan includes up to {amount} toward food that spoiled when the fridge failed. Take a quick photo of what you had to throw out and send it with a rough list. We do not need store receipts for amounts under that limit, and the payment usually comes by e-transfer within ten business days."
      ],
      [
        "In the meantime, a few tips may help. Keep the freezer side running, since it is still working, and pack it fairly full so it holds the cold. Avoid adding warm leftovers to it. If you see water pooling under the crisper drawers, put a towel down and let us know, because that can mean the drain line is blocked too.",
        "Until the part arrives, it is safe to keep using the unit for drinks and items that do not spoil. Please do not try a manual defrost with a hair dryer or a heat gun, as that can crack the plastic liner and void part of the warranty. Turning the unit off for a full day and letting it thaw on its own is fine."
      ],
      [
        "When the part comes in, the repair itself should take about ninety minutes. Our technician, {p1}, will replace the motor, reset the control board and run a short cooling test before leaving. It helps if the area in front of the fridge is clear and the bottom shelves are empty, since {p1_he} needs to remove the back panel inside the fresh food compartment.",
        "Once we have the part, we will book a visit at a time that works for you. The technician will need to pull the fridge away from the wall, so please clear anything stacked on top of it. Plan for the freezer to be empty for about two hours. After the repair, give it a full day to reach normal temperature before restocking."
      ],
      [
        "I also wanted to mention that this is the second warranty repair on this unit in a year. If the same problem comes back after the new part is installed, the manufacturer's policy allows us to ask for a replacement instead of another repair. I have flagged your file so that the history is easy to see if it comes to that.",
        "Since your fridge is under three years old, I have also reported this failure to the manufacturer as a quality concern. That does not change your repair, but it creates a record. If more owners report the same part, the company sometimes extends coverage or issues a service bulletin, and having your case logged makes it easier for you to benefit from that."
      ],
      [
        "Please reply to this email or call me at {phone} if you have any questions or want to arrange the loaner. I will check the backorder status every Monday and send you a short note each week, even if there is nothing new to report. I am sorry for the inconvenience, and I appreciate how understanding you have been.",
        "You can reach me directly at {phone} or through this email address. If your plans change, for example if you will be away when the part arrives, let me know and I will hold it for you. Thanks again for bearing with us. A broken fridge is a real nuisance, and we will get it sorted as quickly as the supply chain allows."
      ]
    ],
    "details": [
      "Work order {ref} lists the failed component as the evaporator fan motor (OEM part No. EFM-2290B); the backorder ETA from {company} is {date2}, with a fallback ETA of {date3} if the first shipment slips.",
      "The loaner package (one 4.4 cu. ft. bar fridge and one 5 cu. ft. chest freezer) was delivered to {street} on {date} and must be returned within {number} days of the completed repair.",
      "Food spoilage reimbursement under the 'Gold Care' extended plan is capped at {amount}; claims over that limit require itemized receipts and approval from {sender} under file {ref} before payment is issued by e-transfer.",
      "Technician {p1} recorded a fresh food temperature of 14 degrees C at {time} on {date}, well above the 4 degrees C target; error code 'E7-FAN' was displayed on the control board.",
      "Per manufacturer policy (Bulletin RF-118, revised 2025), a second failure of the same sealed or electrical component within 12 months qualifies the unit at {street} for replacement; see also prior file {ref2} and visit on {date}.",
      "Please confirm access to the kitchen at {street} between {time} and {time2}; the technician needs approx. 1 m of clearance in front of the unit and a grounded 115-volt outlet nearby.",
      "Our parts desk in {city} can be reached at {phone} (ext. 330), Monday to Friday; quote work order {ref} and the model and serial numbers printed on the label inside the crisper drawer area.",
      "Weekly status updates will be sent from {email} every Monday until the part arrives; if no update is received by {date2}, call {sender} directly so the order with {company} can be escalated."
    ]
  },
  {
    "id": "c03-duplicate-charge",
    "kind": "letter",
    "title": "Billing dispute over a duplicate charge on a phone and internet bill",
    "orgs": [
      "Tidewater Telecom",
      "{city} Valley Communications"
    ],
    "senderTitles": [
      "Billing Resolution Specialist",
      "Customer Accounts Supervisor"
    ],
    "subjects": [
      "Your billing dispute, case {ref}",
      "Resolution of duplicate charge on account"
    ],
    "sections": [
      [
        "Thank you for contacting us about your most recent phone and internet bill. You told our support team that your monthly package appeared twice on the statement dated {date}, and that both charges were taken from your credit card. I have reviewed the account in detail, and I can confirm that you were right. You were billed twice for the same month of service.",
        "I am writing about the concern you raised with our call centre regarding a double charge on your account. You noticed that your bundle of home phone, internet and streaming add-ons showed up as two identical lines, each with the same service period. I appreciate you taking the time to compare the statement against your card activity, because that made the problem quick to trace."
      ],
      [
        "The duplicate came from a system update we made to our billing platform earlier this year. A small group of customers who had changed their payment method in the same week were processed twice in one billing run. Your account was one of them. The error was ours and had nothing to do with anything you did, and I am sorry for the trouble it caused.",
        "Our records show that when you switched from paper statements to email billing, the change created a second billing profile that was never closed. For one cycle, both profiles generated an invoice. It was an internal mistake, and it should have been caught by our checks before the payment was processed. I have removed the extra profile so it cannot happen again."
      ],
      [
        "We have reversed the second charge in full. The refund of {amount} was sent back to the same credit card on {date2}. Depending on your bank, it may take three to five business days to appear on your card statement. You do not need to do anything for this to happen. If it has not shown up after a week, please call me and I will trace it.",
        "Rather than wait for a card refund, we have applied the duplicate amount as a credit to your account. That means your next bill will show a balance of zero, and the following month will bill normally. If you would prefer the money returned to your card instead, just let me know and I can switch it. Either option is fine with us."
      ],
      [
        "I also noticed that the extra charge pushed your card over its limit for a few days, and the card company may have charged you a fee. If that happened, send me a copy of that statement page and we will cover the fee. It seems only fair, since the problem started with our billing, not with you.",
        "When the duplicate went through, our system also marked your account as having a payment issue, which triggered an automatic late notice by email. Please ignore that notice. I have cleared the flag, and it will not affect your credit rating or your account standing. I have also removed a small late charge that was added in error at the same time."
      ],
      [
        "As a goodwill gesture for the inconvenience, I have added a one-time credit of {amount2} to your account. It will appear on your next statement as an adjustment. This is separate from the refund for the duplicate charge, and there is nothing you need to do to receive it. It does not change your current plan, price or contract dates.",
        "To make up for the time you spent sorting this out, we would like to give you three months of our faster internet speed tier at no extra cost. Your modem will update overnight, and you should see the higher speed the next morning. At the end of the three months, it returns to your current plan automatically, with no charge and nothing to cancel."
      ],
      [
        "Please look over your next two statements to make sure everything appears as expected. You should see one charge for the regular monthly service, the credit described above, and nothing else new. Your plan details, phone number and email address have not changed. If anything looks out of place, compare it with this letter and give me a call.",
        "For your records, your account number and case number appear at the top of this letter. I suggest keeping this letter with your statements for a few months in case anything comes up. If you set up automatic payments through your bank, rather than through us, you may also want to check that the bank did not schedule an extra payment."
      ],
      [
        "I want you to know we took this seriously. The billing error has been reported to our systems team, and a fix was put in place so that changing a payment method can no longer trigger a second charge. We have also reviewed other accounts affected by the same problem and are contacting each customer directly rather than waiting for them to notice.",
        "Your complaint has been logged with our quality team. Every billing dispute is reviewed each month to look for patterns, and yours helped us find a gap in how account changes are handled. Customers like you who point out errors make our service better. Thank you for raising it calmly and clearly, which made our work much easier."
      ],
      [
        "If you have any more questions about this case or your account, you can reach me directly at {phone} on weekdays. Please mention case {ref} so I can pull up your file right away. Thank you again for your patience and for being a customer with us. If I am away, a colleague on my team can help too.",
        "Should you need anything else, call me at {phone} or reply to {email}. I am happy to go through the bill line by line with you if that would help. I appreciate your understanding, and I hope the rest of your service with us runs smoothly from here on. Have a good week ahead."
      ]
    ],
    "details": [
      "Statement No. {ref} dated {date} shows the 'Home Plus Bundle' billed twice for the same service period; the second charge of {amount} was reversed on {date2} under adjustment code DUP-03.",
      "A goodwill credit of {amount2} (non-transferable; no cash value) was applied to the account on {date2} and will appear on the statement issued approx. {number} days later as 'Customer Care Adjustment'.",
      "Per the internal review by {p1}, approx. {bignumber} accounts were affected by the same payment-method update; each will be contacted by {date3} and refunded without the customer needing to call.",
      "The late payment flag and related fee were removed on {date2}; no report was made to any credit bureau, and the account at {street} remains in good standing under case {ref}.",
      "If your card issuer charged an over-limit fee, email a copy of the statement page to {email} with case {ref} in the subject line; reimbursement is usually processed within {number} business days.",
      "The duplicate billing profile (profile ID {ref2}) was closed on {date}, and the primary profile was confirmed as the only active record by {p2} in our systems group at {time}.",
      "Customers on the 'Fibre 300' tier at {street} receive the temporary upgrade to 'Fibre 1G' for three billing cycles; the plan reverts on {date3} with no change to the monthly price of {amount}.",
      "For questions about this resolution, call {sender} at {phone} (ext. 4417), weekdays from {time} to {time2} Pacific; after hours, our general support line can add notes to case {ref}."
    ]
  },
  {
    "id": "c04-furniture-delivery-delay",
    "kind": "email",
    "title": "Furniture delivery delay due to a supplier problem",
    "orgs": [
      "Cedar and Loom Furniture",
      "{city} Home Furnishings Gallery"
    ],
    "senderTitles": [
      "Delivery Coordinator",
      "Customer Experience Lead",
      "Store Manager"
    ],
    "subjects": [
      "New delivery window for order {ref}",
      "Your sofa and chairs: delivery update"
    ],
    "sections": [
      [
        "I'm writing with an update on your furniture order, and I'm afraid it is not the news either of us hoped for. Your sectional sofa and the matching ottoman were scheduled to arrive at your home on {date}, but that delivery will not go ahead as planned. I want to explain what happened and give you a new date you can count on.",
        "Thanks again for choosing us for your new dining set. You were expecting the solid oak table and six chairs to come on {date}, and I know you may have planned around that, perhaps clearing space or arranging time off work. Unfortunately we need to move the delivery, and I wanted you to hear it from me directly rather than through an automated text."
      ],
      [
        "The delay comes from our upholstery supplier, {company}. Their plant had a problem with a fabric shipment, and the bolt for your colour arrived with a dye flaw that did not pass inspection. Rather than build your sofa with fabric that might fade unevenly, they have ordered a fresh run from the mill. It is the right decision, even though it costs time.",
        "Our workshop partner, {company}, told us late last week that a kiln used to dry their oak boards broke down, and the wood for several orders, including yours, is not ready to be cut. Wet wood can warp or crack after it is assembled, so they will not rush it. They expect the kiln to be repaired and the batch finished in about three weeks."
      ],
      [
        "Your new delivery window is the week of {date2}. Our dispatch team will call you two days before that week to set an exact day and a four-hour time slot. If that week is difficult for you, just reply to this email and we will move you to the following week instead. We would rather fit your schedule than have you wait at home twice.",
        "We have booked a new delivery for {date2}. That date is based on the supplier's latest schedule plus a few days of buffer for shipping across from the mainland. If anything changes again, you will hear from me right away, not on the morning of the delivery. You will also get the usual text reminder the evening before with a time slot."
      ],
      [
        "I know this may leave you without seating for a few weeks, especially if you already gave away your old couch. If that is the case, let me know. We have a few floor model sofas in the showroom that we can lend you free of charge until yours arrives, and our crew will swap them on the same trip.",
        "To soften the wait, we can deliver your sideboard, which is already in our warehouse, ahead of the rest of the order. There is no extra delivery charge for splitting the shipment this time. If you would rather receive everything at once to avoid two visits, that is fine too, just reply and tell us which you prefer."
      ],
      [
        "We would also like to offer a small thank-you for your patience. I have applied a credit of {amount} to your order, which will be refunded to your original payment method once delivery is complete. If you were planning to buy cushions, a rug or anything else from the store, you can instead use the credit as store value at a higher amount.",
        "Since this delay is on our side, we are waiving the white glove delivery fee of {amount}. That fee covers carrying the pieces into your room of choice, assembly, and taking away all the packaging. You will see the refund on your card within a few days. We also have a ten percent discount ready if you want to add something to the order."
      ],
      [
        "If the delay simply does not work for you, you are welcome to cancel the order for a full refund, including your deposit. I hope you will stay with us, but I understand that some people furnish a room for a specific event, like hosting family over the holidays, and a later date may defeat the purpose. There is no penalty either way.",
        "You also have the option of choosing a different fabric or finish that we have in stock, which could bring the delivery forward by several weeks. I can send you photos or swatches if you want to compare. Some customers have found a close match they liked even better, but please do not feel any pressure to change your original choice."
      ],
      [
        "Before the delivery day, please measure doorways, stair turns and any tight hallways, especially if the pieces need to reach an upper floor. Our crew can remove legs and some door hinges, but they cannot cut or bend frames. If you live in a building with an elevator, let us know about booking rules so we can reserve a time with your building manager.",
        "When we confirm the new date, please make sure there is clear parking near your entrance for a five-tonne truck. If your street has parking restrictions or a steep driveway, add a note to your reply. Our crew also needs a clear path from the door to the room, so moving rugs and small tables beforehand saves time on the day."
      ],
      [
        "I'm sorry again for changing your plans. You can reach me at {phone} or simply reply here, and I will keep an eye on your order personally until it is in your home. Thank you for your understanding and your patience. If you would like to stop by the showroom to see fabric samples in person, you are always welcome.",
        "If you have any questions, call me at {phone} or write back to this email. I'll send you another update as soon as the supplier confirms the shipment has left their plant. We appreciate your business and your patience, and we are looking forward to getting your new furniture to you."
      ]
    ],
    "details": [
      "Order {ref} (one 3-piece sectional in 'Harbour Grey' performance fabric and one storage ottoman) was rescheduled from {date} to {date2} after the supplier, {company}, rejected the fabric lot.",
      "The white glove delivery fee of {amount} has been refunded to the card ending in 4471; a separate goodwill credit of {amount2} will be applied once the order is signed for at {street}.",
      "Dispatch will call between {time} and {time2} two business days before the delivery week; if no one answers, a voicemail and a text will be sent to the number on order {ref}.",
      "Per the supplier's notice dated {date}, approx. {number} orders were affected by the kiln failure at their plant near {city2}; replacement stock is expected to ship no later than {date2}.",
      "Delivery to {street} requires a minimum clearance of 81 cm (32 in.) at all doorways and stair turns; customers in strata buildings should reserve the elevator at least {number} days ahead and email confirmation to {email}.",
      "The floor model loaner (Model No. CL-882, 'Linden' 3-seat sofa) will be picked up from {street} on {date2}, the same trip that delivers the pieces on order {ref}; no deposit is required.",
      "If you choose to cancel, the full deposit of {amount} is refunded within {number} business days; cancellations must be confirmed in writing to {sender} before {date3}.",
      "Our {city} showroom is open daily from {time} to {time2}; fabric swatches for in-stock alternatives (e.g. 'Moss', 'Driftwood', 'Slate') can be mailed free of charge on request."
    ]
  },
  {
    "id": "c05-deck-estimate",
    "kind": "letter",
    "title": "Contractor estimate for replacing a deck",
    "orgs": [
      "Westshore Decks and Fencing",
      "{city} Outdoor Builders Ltd."
    ],
    "senderTitles": [
      "Estimator",
      "Project Manager",
      "Owner and Lead Carpenter"
    ],
    "subjects": [
      "Estimate {ref}: deck replacement",
      "Your deck replacement quote"
    ],
    "sections": [
      [
        "Thank you for inviting us to look at your deck. During my visit on {date}, I checked the framing, the stairs and the railings, and I agree that it is time for a full replacement rather than a repair. Several joists near the house have soft spots, and the ledger board is pulling slightly away from the wall. This letter sets out our estimate and plan.",
        "It was a pleasure meeting you at your home on {street} to talk about the back deck. As you pointed out, the boards are cupped and splintering, and a few railing posts move when you lean on them. When I crawled underneath, I found that the posts are sitting directly on soil, which explains the rot. Below is what we recommend and what it would cost."
      ],
      [
        "We propose removing the existing deck completely, down to the ground, and hauling all of the old lumber away. The new deck would keep roughly the same footprint so it lines up with your patio door, but we would add proper concrete footings below the frost line. The frame would be built with pressure treated lumber and galvanized hangers at every joist.",
        "Our plan is to tear out the old structure, dig new footings, and build a frame that meets the current building code. We would raise the deck slightly so it sits one step below your door threshold, which keeps rain from running back toward the house. The stairs would be rebuilt wider, with a landing at the bottom instead of ending on the lawn."
      ],
      [
        "For the deck surface, we have priced two options. The first is a premium cedar board, which looks warm and natural but needs a stain every couple of years. The second is a composite board in a grey or brown tone that needs only a wash with soap and water. Composite costs more up front but saves time and money later.",
        "You asked about decking materials, so I have included pricing for both a pressure treated pine surface and a capped composite. Pine is the budget choice and is perfectly sound, though it will check and grey with age. Composite resists stains and fading and comes with a twenty-five year warranty. Samples of both are in our truck the next time we visit."
      ],
      [
        "The total estimate for the cedar option is {amount}, including materials, labour, disposal and the permit fee. The composite option comes to {amount2}. Both prices include a new aluminum railing with glass panels on the side facing your garden. The estimate is good for sixty days, after which lumber prices may need to be updated.",
        "Using pressure treated pine, the full price comes to {amount}, and with composite decking it is {amount2}. These figures cover demolition, footings, framing, decking, stairs, railings, cleanup and the building permit. We ask for a deposit of one third to book your project, with the balance due in two stages as the work progresses."
      ],
      [
        "Because the deck is more than sixty centimetres off the ground, the municipality requires a building permit. We take care of the application, including the site plan and drawings. Permit approval in your area usually takes two to four weeks. An inspector will check the footings before we pour concrete and again when the framing is complete, before the decking goes on.",
        "A permit is required for this work, and we handle the whole process for you. I will submit drawings to the city's building department, and once the permit is issued, we post it in a front window. The city will do two inspections. We cannot move past each stage without a pass, which protects you as much as it protects us."
      ],
      [
        "Assuming the permit comes through on time, we can start on {date2}. Demolition takes one day, footings take two more, and then we wait a few days for the concrete to cure. Framing, decking and railings usually take a week after that. In total, expect the job to run about three weeks, depending on the weather.",
        "Our crew currently has an opening that starts on {date2}. A deck of this size typically takes twelve to fifteen working days from teardown to final cleanup. Heavy rain can push things back a day or two, especially during the footing stage. We will keep you updated if the schedule shifts, and we never leave a site unsafe overnight."
      ],
      [
        "During the work, the yard near the deck will be off limits, and access to the back door will be blocked for a few days. Please keep pets inside or away from the work area. We will need to use one of your exterior outlets for our saws. Our crew starts at eight in the morning and wraps up by four thirty.",
        "Please plan to move patio furniture, barbecues and planters away from the deck before we arrive. If there are any underground lines for irrigation or lighting, mark them for us. We will call for a utility locate before digging. Our crew keeps the site tidy at the end of each day, and a magnet sweep is done for nails."
      ],
      [
        "If you would like to go ahead, please sign and return the enclosed acceptance form with your deposit. I am happy to adjust the plan, for example by adding a built-in bench or lighting. Call me at {phone} with any questions. Thank you very much for considering us for your new deck project.",
        "To book your spot, call me at {phone} or reply to {email}. If you are comparing quotes, I would be glad to go through ours line by line so you can see exactly what is included. We stand behind our work with a five-year workmanship warranty. Thank you for the opportunity to bid on your deck."
      ]
    ],
    "details": [
      "Estimate {ref} assumes a 4.3 m x 5.5 m (approx. 14 ft x 18 ft) deck at {street}, with {number} helical or concrete footings set to a minimum depth of 450 mm below grade.",
      "The building permit fee of approx. {amount} is paid to the City of {city} on your behalf under estimate {ref}; inspections are booked for the footings (stage 1) and framing (stage 2) before decking is installed.",
      "Payment schedule: one-third deposit on signing; one-third after the framing inspection passes; final balance of {amount2} due on completion (approx. {date3}), less any holdback agreed in writing with {sender}.",
      "The composite option uses capped boards in 'Driftwood Grey' with hidden fasteners; the manufacturer's 25-year fade and stain warranty is registered by our office within {number} days of completion at {street} on {date3}.",
      "Our subcontractor for the aluminum and glass railing, {company}, needs approx. {number2} business days to fabricate the panels after final measurements are taken on {date2}.",
      "A BC One Call utility locate for {street} (ticket No. {ref2}) will be requested before excavation; markings are valid for 14 days and must be refreshed if work is delayed past {date2}.",
      "Lumber prices quoted are valid until {date3}; after that date, the estimate may be revised by up to {percent} to reflect supplier price changes from our yard in {city2}.",
      "Our crew lead, {p1}, will be on site daily from {time} to {time2}; questions during construction can go to {P1_him} directly or to the office at {phone}."
    ]
  },
  {
    "id": "c06-bakery-lease-renewal",
    "kind": "letter",
    "title": "Commercial lease renewal for a small bakery",
    "orgs": [
      "Bayview Commercial Properties",
      "{city} Main Street Holdings Inc."
    ],
    "senderTitles": [
      "Property Manager",
      "Leasing Manager",
      "Commercial Portfolio Manager"
    ],
    "subjects": [
      "Lease renewal offer, unit {ref}",
      "Renewal of your retail lease"
    ],
    "sections": [
      [
        "Your current lease for the bakery space at {street} ends on {date2}, and I am writing to offer you a renewal. We have enjoyed having your business in the building. The smell of fresh bread in the mornings has done more for foot traffic on this block than any sign we could put up, and the other tenants have said the same thing.",
        "As your lease term comes to a close, I wanted to give you plenty of notice and a clear proposal for renewing. Your bakery has become one of the anchors of this small strip of shops, and we would very much like you to stay. This letter covers the proposed rent, the repairs we plan to make and a few changes in the terms."
      ],
      [
        "We are proposing a new five-year term with an option for one further five-year renewal. That gives you stability to plan, invest in equipment and build your customer base without worrying about a move. If you would prefer a shorter three-year term, we can discuss it, though the rent would be slightly higher to reflect the shorter commitment on both sides.",
        "Our offer is a three-year term, with the right to renew for another three years on the same conditions, subject to a rent review at that time. Many small food businesses like this length because it matches the life of major ovens and refrigeration. We are open to a longer term if you plan to expand or need time to pay off equipment."
      ],
      [
        "The base rent would rise from its current level to {amount} per month in the first year, with a small fixed increase each year after that. This is still below what similar ground floor spaces on the street have leased for this year. We have also kept the additional rent for property taxes, insurance and common area costs at the same share as before.",
        "For the first year of the new term, monthly base rent would be {amount}. That reflects an increase of {percent} over your current rate, which is in line with the market for this part of town. Operating costs for the building, such as snow clearing, landscaping and insurance, will continue to be shared based on the size of your unit."
      ],
      [
        "On the repair side, we know the rooftop heating and cooling unit over your space has been struggling, especially in summer when the ovens run all morning. We will replace it entirely before the new term begins, at our cost. Our mechanical contractor, {company}, will schedule the work on a Sunday or Monday so your baking is not interrupted.",
        "We have heard your concerns about the floor drain in the back kitchen and the worn vinyl near the front counter. As part of this renewal, we will have the drain line scoped and repaired and replace the front flooring with a non-slip commercial surface. The work would happen over two days, and we will plan it around your quietest week."
      ],
      [
        "There are a few repairs we see as your responsibility under the lease. These include the grease trap, the exhaust hood and filters, and your own equipment. The grease trap needs to be pumped on a regular schedule and records kept, as the city has started asking landlords for proof during routine inspections. We can recommend a reliable service company if that helps.",
        "Please note that the lease continues to make the tenant responsible for interior maintenance, such as lighting, plumbing fixtures inside your unit and the kitchen exhaust system. We will remain responsible for the roof, the structure, the parking lot and the main water and sewer lines. If you are unsure who covers a repair, call me before booking any work."
      ],
      [
        "The new lease also includes an updated signage clause. You are welcome to keep your current sign. If you want to add a sidewalk sandwich board or a patio with two small tables, we support that, as long as it meets the city's sidewalk use rules and leaves enough room for wheelchairs and strollers to pass.",
        "One change in the new lease relates to hours. Your current agreement does not mention early access, but we know you arrive well before dawn. The new lease gives you access to the building at any hour and a dedicated parking stall near the back door for deliveries. We will also add a motion-sensor light over that entrance for safety."
      ],
      [
        "To accept this offer, please sign and return the enclosed renewal agreement by {date}. If you would like to negotiate any terms or have your lawyer review the document, please let me know soon so we can leave time for discussion. If we do not hear from you by that date, we will assume you are considering other options and follow up.",
        "We would appreciate your decision by {date}. If you have questions about the rent figures or want to talk through the repair plan, I am happy to meet at the bakery at a time that suits you. Some tenants like to bring their accountant or lawyer to that conversation, and that is completely fine with us."
      ],
      [
        "Thank you for being such a good tenant. Your rent has always arrived on time, and you have taken care of the space. You can reach me at {phone} or {email} whenever it is convenient. I look forward to working with you for many more years. Please give my best to your staff as well.",
        "We truly value having you on the street, {r_title}, and we hope this offer gives you what you need to keep growing. Please call me at {phone} if anything in this letter is unclear. I look forward to hearing from you and, as always, to stopping by for a loaf on Saturday."
      ]
    ],
    "details": [
      "Unit {ref} at {street} measures approx. 1,140 sq. ft. (106 sq. m) of ground floor retail space; the tenant's proportionate share of operating costs is {percent} of the building total.",
      "Base rent for unit {ref} in Year 1 of the renewal term is {amount} per month, plus GST, rising by a fixed 2.5% each year; additional rent is estimated at {amount2} per month for the current fiscal year.",
      "The landlord's contractor, {company}, will replace the 5-ton rooftop unit (RTU-2) between {date} and {date2}; the bakery's power will be off for approx. {number} hours on the install day.",
      "Grease interceptor pump-out records for {street} must be kept for 24 months and produced on request; the City of {city} bylaw (No. 4180) requires service at least every {number} weeks for food premises.",
      "The tenant's option to renew unit {ref} for a further term must be exercised in writing no later than six months before expiry, i.e. by {date3}, and delivered to {sender} at the address on file.",
      "Sidewalk use at {street} (sandwich board and two-table patio) requires a separate permit from the City of {city2}; the minimum clear pedestrian path is 1.5 m, measured from the building face, under file {ref2}.",
      "Unless the signed renewal agreement is received by {date}, the landlord may list unit {ref} for lease; the current tenant would then hold over on a month-to-month basis at {amount2}.",
      "Questions about the HVAC schedule can go to our site supervisor, {p1}, at {phone} (ext. 12); {P1_he} will confirm the work date at least {number} days in advance."
    ]
  },
  {
    "id": "c07-conference-catering",
    "kind": "email",
    "title": "Catering order confirmation for a 120-person conference lunch",
    "orgs": [
      "Saltwater Kitchen Catering",
      "{city} Harvest Table Events"
    ],
    "senderTitles": [
      "Catering Sales Manager",
      "Event Coordinator",
      "Executive Chef"
    ],
    "subjects": [
      "Lunch order confirmed, event {ref}",
      "Your conference lunch for 120 guests"
    ],
    "sections": [
      [
        "Thank you for booking us to cater the lunch at your regional conference. This email confirms the order we discussed on the phone: a hot buffet lunch for one hundred and twenty guests, served in the main hall on {date}. Please read through the details below and let me know if anything needs to change. I've tried to capture every note from our call.",
        "I'm pleased to confirm your catering order for the conference. We'll be providing lunch for one hundred and twenty attendees on {date}, with service in the hotel's ballroom foyer. I've summarized everything below, including the menu, dietary meals, timing and staffing, so you have a single reference to share with your planning team and the venue."
      ],
      [
        "The main buffet will include herb-roasted chicken thighs, a baked salmon with lemon and dill, and a wild mushroom pasta as the vegetarian main. On the side, there will be roasted baby potatoes, a seasonal green salad with two dressings, a quinoa and roasted squash salad, and fresh rolls with butter. Dessert is an assortment of squares, cookies and fresh fruit.",
        "Your menu starts with a roasted tomato soup served in mugs at the start of the line, followed by a build-your-own sandwich bar with sliced turkey, roast beef, grilled vegetables and three kinds of bread. We'll add a kale and apple salad, a Greek pasta salad and kettle chips. For dessert, we'll set out lemon bars, brownies and a platter of melon and berries."
      ],
      [
        "From the registration list you sent, we've counted the special meals. Eleven guests are vegetarian, four are vegan, six need gluten-free meals, and two have severe nut allergies. The vegan and gluten-free meals will be plated individually and labelled with each guest's name, so they don't need to line up at the buffet. Our server will bring them to the tables.",
        "For dietary needs, we've noted vegetarian, vegan, gluten-free, dairy-free and halal requests from your registration forms. Rather than separate plates, we'll mark every buffet dish with clear cards listing the main allergens. The few guests with serious allergies will receive a sealed, labelled meal prepared in a separate area of our kitchen. We'll double-check the numbers a few days ahead."
      ],
      [
        "Please note that our kitchen handles nuts, so although we take great care, we cannot promise a completely nut-free environment. For the two guests with serious allergies, our chef will prepare their meals first thing in the morning on cleaned equipment and seal them before anything else is made. If either guest would like to speak with the chef beforehand, we're happy to arrange a quick call.",
        "One guest listed a shellfish allergy and another listed celiac disease, so our chef has adjusted the menu to remove anything with shrimp and to use gluten-free pasta for the whole vegetarian main. That way no one has to ask questions at the buffet. If any guest has a need that wasn't on the registration form, please send it to me as soon as you can."
      ],
      [
        "Our team will arrive at {time} to set up. Lunch will be ready to serve thirty minutes later, and we'll keep the buffet open for one hour. We'll bring all serving dishes, chafing stands, linens for the buffet tables and compostable plates and cutlery. The venue is supplying the guest tables and chairs, so we'll coordinate with their staff on the layout.",
        "We're planning a setup time of about forty-five minutes before service. Lunch will start at {time}, with two buffet lines so all one hundred and twenty guests can get through in about fifteen minutes. We'll provide real china and stainless steel cutlery, plus water and coffee stations. All dishes and linens will be cleared and taken away by the end of the afternoon."
      ],
      [
        "The total cost for food, staff and rentals is {amount}, plus taxes and an eighteen percent service charge. Your deposit has already been received, thank you. The balance is due seven days after the event, and we'll email the final invoice. If your numbers drop by more than ten guests, we need to know at least five days before the event to adjust the bill.",
        "The quoted price for the full lunch is {amount} before tax. That covers the food, four servers, one chef on site, the coffee and water stations and all rentals. We'll need final guest numbers by {date2}, and after that we'll charge for the confirmed count even if fewer people attend. Any extra guests on the day can be added at the same per-person rate."
      ],
      [
        "A couple of small things will help the day go smoothly. Please confirm that we can use the loading dock at the back of the building and that someone can meet our driver there. We'll also need access to at least two standard electrical outlets near the buffet for the coffee urns. If there's a separate contact at the venue, please send me their name.",
        "Before the event, could you let me know whether there will be any speakers during lunch, and if so, where the podium will be? We like to place the buffet so the line doesn't block anyone's view. We'll also need to know whether leftovers can be packed for a local food bank, which we're happy to arrange if the venue allows it."
      ],
      [
        "Thanks again for choosing us. I'm the main contact for your event, and you can reach me at {phone} if anything changes or if you just want to talk something through. We're looking forward to feeding your group and helping the day go well. Our kitchen team is already planning the prep schedule around your event.",
        "If you have questions about the menu or need to make changes, call me at {phone} or reply to this email. I'll send one last confirmation two days before the event with the final counts and timing. We appreciate the chance to work with you and your team, and we'll make sure lunch is one less thing to worry about."
      ]
    ],
    "details": [
      "Event {ref}: buffet lunch for {number} guests at {street}, setup at {time}, service from {time2}; final guest count due by {date2}, after which charges are based on the confirmed number.",
      "Dietary summary for event {ref} per the registration list: vegetarian (11), vegan (4), gluten-free (6), dairy-free (3), halal (5); allergy meals are labelled by guest name and sealed in the kitchen at {city2} before 7 a.m. on {date}.",
      "The quoted total of {amount} excludes GST and the 18% service charge; the deposit of {amount2} was received on {date} and is applied to the final invoice issued after the event.",
      "Our on-site lead, {p1}, will meet the venue contact at the loading dock at {time}; please make sure {p1_he} has the dock access code and a parking pass for one cube van.",
      "Rentals delivered to {street} by {time} include {number} chafing dishes, two 100-cup coffee urns, 6 ft. buffet tables with black linens and approx. 130 settings of china; the venue supplies guest tables and chairs.",
      "Leftover food may be donated to the {city} Community Food Bank, which collects at {time2}, only if it has been held at safe temperatures (below 4 degrees C or above 60 degrees C) for the full service period on {date}.",
      "Changes to the menu for event {ref} after {date2} may incur a fee of up to {amount2}; changes received less than 72 hours before the event cannot be guaranteed, e.g. swapping the salmon for halibut.",
      "Contact {sender} at {phone} (ext. 2) or {email} for any changes; please quote event {ref} and the organizer's name, {p2}, so the request goes to the right file."
    ]
  },
  {
    "id": "c08-brake-inspection",
    "kind": "email",
    "title": "Vehicle inspection findings and recommended brake work",
    "orgs": [
      "Ironwood Auto Service",
      "{city} Family Auto Care"
    ],
    "senderTitles": [
      "Service Advisor",
      "Shop Foreman",
      "Service Manager"
    ],
    "subjects": [
      "Inspection results for repair order {ref}",
      "Brake work needs your approval"
    ],
    "sections": [
      [
        "Thanks for bringing your car in this morning for its scheduled service. The oil change and tire rotation are done. During the multi-point inspection, our technician found some brake wear that I want to explain before we go any further. I've attached a few photos so you can see exactly what we saw on the hoist.",
        "Your vehicle is on the lift now, and I wanted to update you before lunch. We've completed the inspection you booked, and most of the car is in good shape. The tires have plenty of tread, the battery tested strong, and all the fluids look clean. However, the brakes need attention, and I'd like your approval before we do any extra work."
      ],
      [
        "The front brake pads are down to about three millimetres. New pads start at around ten, and we recommend replacing them at three or below. The front rotors also have a lip on the outer edge and some light scoring, which is why you may have heard a grinding or squeal when stopping at low speed. The rotors are too thin to resurface safely.",
        "Our technician, {p1}, measured the rear brake pads at two millimetres on the left side and four on the right. Uneven wear like that usually means a caliper slide pin is sticking, so the pad on one side keeps rubbing. {P1_he} also noticed the brake fluid is dark and tested high for moisture, which can lower its boiling point and make the pedal feel soft."
      ],
      [
        "We recommend replacing the front pads and rotors as a set. That's the job that matters most for safety right now. We'd also clean and lubricate the caliper slides so the new pads wear evenly. The cost for parts and labour is {amount}, plus tax. It will take about two hours, so your car would be ready by mid-afternoon.",
        "Our recommendation is to replace the rear pads, clean and grease the slide pins, and replace the sticking caliper on the left side. We'd also flush the brake fluid, since old fluid can corrode the internal parts over time. The total for this work comes to {amount} before tax. We have the parts in stock and can finish today."
      ],
      [
        "This is not an emergency, and the car is safe to drive home carefully today if you'd rather wait. But I wouldn't put it off for more than a couple of weeks. Once the pads wear through, the metal backing grinds against the rotor, and the repair becomes more expensive. Stopping distances also get longer, especially in the wet.",
        "To be clear about urgency: the right side is fine for now, but the left side is close to metal on metal. I'd advise doing it today or within a few days. If you choose to wait, please avoid long downhill drives or towing, and bring it in right away if you hear grinding or feel a pull to one side when braking."
      ],
      [
        "We also noticed a couple of smaller things that can wait. The cabin air filter is dirty and the wiper blades are streaking. Neither one is a safety concern, and they're both quick to do at your next visit. I've listed them on the inspection report under 'future recommendations' so you have them on record.",
        "There are two items that don't need doing today. The serpentine belt shows a few small cracks, which is normal at this age but worth watching, and there's a slight oil seep from the valve cover gasket. We'll check both again at your next oil change. I'll note them on your invoice so you can see how they change over time."
      ],
      [
        "To approve the work, just reply to this email with 'approved' or give me a call. If you'd like to do only part of it, for example the pads now and the rotors later, I can price that too, but I'll be honest that it's usually not worth it here because the rotors are past their limit.",
        "If you're happy to go ahead, reply 'yes' to this email or call the front desk. We won't start any work without your clear approval, and the price I quoted won't change unless we find something new, in which case I'll call you first. You're also welcome to come by and see the parts on the bench before deciding."
      ],
      [
        "All the brake parts we install come with a two-year or forty thousand kilometre warranty on parts and labour. After any brake job, the new pads need a short bedding-in period. For the first hundred kilometres or so, try to avoid hard stops, so the pads and rotors wear in evenly and give you the best braking feel.",
        "Our brake work is guaranteed for twenty-four months, no matter how many kilometres you drive. When you pick up the car, the pedal may feel slightly different for the first day as the new pads settle. That's normal. If you notice vibration through the steering wheel when braking, bring it back and we'll check it at no charge."
      ],
      [
        "Please let me know how you'd like to proceed. You can reach me directly at {phone}. If we don't hear back by the end of the day, we'll finish the original service, park the car out front and leave the keys at the desk. Thanks for trusting us with your vehicle.",
        "Feel free to call me at {phone} with any questions at all. Brake work can feel like an unexpected expense, and I'm happy to walk you through the photos and the measurements. We appreciate your business and will have your car back to you as quickly as we safely can."
      ]
    ],
    "details": [
      "Repair order {ref}: front pad thickness measured at 3 mm (spec. min. 3 mm), rear at 6 mm; front rotors measured 26.1 mm against a discard limit of 26.0 mm, per technician {p1} at {time}.",
      "Estimate on repair order {ref} for front pads, rotors and slide service is {amount} plus GST and PST; the optional brake fluid flush (DOT 4, approx. 1 L) adds {amount2} if approved at the same visit.",
      "Brake fluid tested at 3.5% moisture content on the strip test, above the 3% replacement threshold; the last recorded flush on file {ref2} was done at {city2} location approx. {number} years ago.",
      "Items deferred to the next visit by technician {p1} ('amber' on the report): cabin air filter, wiper blades, a cracked serpentine belt (grooves only) and a valve cover gasket seep; recheck by {date2} or at {km} more driving.",
      "Work will only proceed with written or recorded verbal approval; approval received from the customer at {time2} on {date} will be noted on repair order {ref} by {sender}.",
      "Our parts supplier, {company}, has OE-equivalent ceramic pads and coated rotors in stock in {city}; the caliper (remanufactured, core charge {amount2}) arrives within {number} hours if needed.",
      "Brake parts and labour on repair order {ref} carry a 24-month / 40,000 km warranty from {date}, honoured at both our {city} and {city2} shops; the warranty is void if the vehicle is used for racing, towing beyond rated capacity or commercial delivery, e.g. courier work.",
      "Pickup hours are {time} to {time2} weekdays; after-hours key drop is available at the side door of {street}, and payment can be made by phone at {phone} before collection."
    ]
  },
  {
    "id": "c09-gym-cancellation",
    "kind": "letter",
    "title": "Gym membership cancellation and final billing",
    "orgs": [
      "Summit Fitness Club",
      "{city} Athletic and Wellness Centre"
    ],
    "senderTitles": [
      "Membership Services Manager",
      "Member Accounts Coordinator"
    ],
    "subjects": [
      "Membership cancellation confirmed, {ref}",
      "Your cancellation and final bill"
    ],
    "sections": [
      [
        "We received your written request to cancel your membership, and this letter confirms that the cancellation has been processed. Thank you for taking the time to fill out the form at the front desk and for letting us know your reasons. We are sorry to see you go, and we understand that moving to a new town makes it hard to keep using a local club.",
        "This letter confirms that your request to end your membership has been received and accepted. Our front desk passed along your note explaining that a change in work hours means you can no longer make it to the club before it closes. That is a common reason, and we appreciate that you followed the cancellation steps in your agreement rather than simply stopping payment."
      ],
      [
        "Under your membership agreement, cancellations need thirty days' notice. Because your request arrived on {date}, your membership will remain active until {date2}. You are welcome to keep using the gym, the pool and the classes until then. Your key fob will stop working at closing time on that last day, and you can drop it in the box at reception.",
        "Your agreement requires one full billing cycle of notice. That means you have one more month of access after the date of your request, and your last day as a member will be {date2}. Please feel free to use every part of the club during that time, including the sauna and any classes you have already booked on the app."
      ],
      [
        "There will be one final payment taken from your account on the usual billing day. It covers your last month of access and comes to {amount}, including tax. After that, no further payments will be taken. Your bank should not see any more charges from us, and the pre-authorized debit will be cancelled on our side as soon as the final payment clears.",
        "Your final bill is {amount}. This includes your last month of membership and the annual maintenance fee, which was due on the anniversary of your sign-up and falls within your notice period. We know that fee can be a surprise, so I have attached a copy of your agreement with the relevant clause marked. No more payments will be taken after this."
      ],
      [
        "Since you were on our annual plan and paid in advance, we have worked out a partial refund for the months you will not use. After taking off the early cancellation fee listed in your agreement, the refund comes to {amount2}. It will be returned to the credit card on file within ten business days. You will receive an email receipt when it is processed.",
        "You also had a personal training package with three sessions left unused. Those sessions do not expire when your membership ends, so you may use them before your last day, or we can refund their value. The refund for unused sessions would be {amount2}. Please tell us which you prefer, and our trainers will be happy to book you in if you choose to use them."
      ],
      [
        "If you had a rented locker, please empty it before your last day. Items left behind are held for two weeks and then donated. We also ask that you return any club towel cards. If a towel card is not returned, a small replacement fee will be added to your final bill, but we would much rather have it back.",
        "Please remember to collect anything you have stored at the club. Our day lockers are cleared every night, but if you rented a permanent locker in the change room, the lock will be cut and the contents bagged a week after your membership ends. We will keep the bag at the front desk for a further two weeks."
      ],
      [
        "If your circumstances change, we would love to welcome you back. Former members can rejoin within a year without paying the sign-up fee again. You can also freeze a membership for up to three months at a reduced rate, which some people find useful if they are travelling or recovering from an injury. Just keep that in mind for the future.",
        "We also wanted to let you know about our flexible options, in case they are useful later. We offer a drop-in pass, ten-visit punch cards and an off-peak membership that costs less and gives access during quieter hours. None of these require a long-term contract. If any of them fit your new schedule, the front desk can set it up in minutes."
      ],
      [
        "We would be grateful if you could take two minutes to complete our short exit survey, which will arrive by email next week. We read every response, and comments from members who leave are some of the most useful feedback we get. It is completely optional and will not affect your cancellation in any way.",
        "Our manager reads every cancellation note, and your comment about the evening class schedule has been shared with our programming team. We are looking at adding later classes in the new year. If you have any other thoughts on what we could do better, we would really welcome them, either in person or by email."
      ],
      [
        "If you have any questions about your final bill or the refund, please call me at {phone} and mention file {ref}. Thank you for being a member, and we wish you all the best in your next chapter. We hope you find a club that suits your new routine, and if you are ever back in the area, please drop in to say hello.",
        "Should anything in this letter not match your own records, please call me at {phone} or write to {email}, and I will sort it out right away. Thank you for being part of our club. It was a pleasure having you, and our door stays open. We wish you all the very best."
      ]
    ],
    "details": [
      "Membership No. {ref} ('Annual All-Access') was cancelled at the member's request on {date}; the 30-day notice period ends on {date2}, after which the key fob is deactivated at {time2}.",
      "The final pre-authorized debit of {amount} (including GST) will be drawn on {date2}; the PAD agreement is then terminated and no further debits will be submitted to the member's bank, as confirmed by {sender}.",
      "Early cancellation fee on file {ref}, per clause 9.2 of the agreement: {amount2}, deducted from the prorated refund for {number} unused months; any balance is credited to the card ending in 0832.",
      "Locker No. {number} in the {city} club's west change room must be emptied by {date2}; unclaimed contents are bagged, held at reception until {date3} and then donated to a local shelter.",
      "Unused personal training sessions ({number2} of 10 remaining) may be booked with trainer {p1} before {date2}, or refunded at the package rate; please confirm your choice by email to {email}.",
      "Former members may rejoin before {date3} without the {amount} enrolment fee; the 'Off-Peak' plan (weekdays from {time} to 4 p.m. and after 8 p.m.) requires no fixed term.",
      "Questions about this account should be directed to {sender} at {phone} (ext. 105); note that our billing office at {street} is closed on statutory holidays and Sundays.",
      "A copy of the original agreement signed on {date} at the {city2} location, with clause 9 ('Cancellation and Refunds') highlighted, is enclosed for reference under file {ref}."
    ]
  },
  {
    "id": "c10-moving-damage-claim",
    "kind": "letter",
    "title": "Moving company response to a complaint about a damaged dresser",
    "orgs": [
      "Two Ravens Moving and Storage",
      "{city} Island Movers Ltd."
    ],
    "senderTitles": [
      "Customer Relations Manager",
      "Claims Officer",
      "Operations Manager"
    ],
    "subjects": [
      "Your damage claim, file {ref}",
      "Response to your complaint about your dresser"
    ],
    "sections": [
      [
        "Thank you for your letter about the damage to your dresser during your recent move. I am sorry that a piece you clearly care about arrived in poor condition. You described a cracked front leg, a deep gouge across the top and a drawer that no longer slides properly. I have read your complaint carefully, and I want to explain what we found and how we plan to make it right.",
        "I have received your complaint about the antique dresser that was damaged when our crew moved you on {date}. I understand it belonged to your grandmother, which makes this far more than a matter of money. Please accept my sincere apology. You deserve a clear answer, and this letter sets out what we have learned and what we are offering."
      ],
      [
        "After receiving your letter, I spoke with the three crew members who handled your move. They told me the dresser was wrapped in blankets and loaded upright, but that it shifted when the truck braked on a steep hill. The crew lead admitted it should have been strapped to the wall of the truck. That step was missed, and it is our responsibility.",
        "I reviewed the inventory sheet, the photos the crew took at pickup and the notes from the delivery. The pickup photos show the dresser in good condition, with only light surface wear on the top. The damage was noted by our driver at delivery, and you signed that the item had arrived damaged. There is no question the damage happened in our care."
      ],
      [
        "Your move was booked with our standard valuation coverage, which pays by weight. On its own, that would offer a very small amount for a dresser like yours. In this case, because the damage was caused by a clear packing mistake, we have decided to go beyond the standard coverage and pay for a proper repair rather than limit you to the weight rate.",
        "You chose our full replacement value protection when you booked, and that coverage applies here. It means we will either arrange and pay for a professional repair or, if the dresser cannot be repaired well, pay its current replacement value. Because the piece is older and difficult to replace, we think a careful repair is the better choice, but the decision is yours."
      ],
      [
        "We work with a furniture restorer, {company}, who specializes in older wood pieces. They can repair the cracked leg using a matching hardwood, fill and refinish the gouge on the top, and rebuild the drawer runner. They have looked at the photos and believe the dresser can be restored to very nearly its original look. We will pay the full cost.",
        "If you agree, our restorer will visit your new home to look at the dresser in person. They will check the joints, the finish and the drawer slides and then give us a written quote. You are welcome to get a second quote from a restorer you trust. We will accept whichever estimate you are more comfortable with, as long as it is reasonable."
      ],
      [
        "The restorer can pick up the dresser and return it to you, usually within three to four weeks. We will cover the pickup and delivery, so you do not have to arrange anything. While the dresser is away, it will be stored in a climate-controlled room. You will receive photos of the work once the repair is finished.",
        "Most of the repair can be done at your home, which avoids moving the dresser again. The leg and the drawer can be fixed in a single visit, while the refinishing of the top may need a second visit after the stain dries. The restorer will put down drop cloths and keep the area well ventilated while they work."
      ],
      [
        "As an additional apology, we are refunding {amount} of your moving charges. This is separate from the repair and has already been sent back to your card. We hope it reflects how seriously we take this complaint, and that it goes some way to making up for the stress of finding the damage after a long moving day.",
        "We would also like to offer you a credit of {amount}, which you can apply to a future move or to six months of storage at our warehouse. If you would rather receive it as a cheque, that is fine too. Please let us know your preference, and we will process it as soon as we hear from you."
      ],
      [
        "We have also made changes so this does not happen to another customer. All crews have been reminded that tall furniture must be strapped, and our supervisors will now check that before each truck leaves. The crew lead on your move has completed additional training. Your feedback directly led to these changes, and we thank you for it.",
        "Your complaint has been reviewed with our whole operations team. Starting next month, each crew lead will photograph how high-value items are loaded before closing the truck. These photos will be kept with the job file. It is a small step, but it helps us catch problems and gives customers a clear record if something does go wrong."
      ],
      [
        "Please call me at {phone} to arrange the repair or to discuss any part of this letter. I will handle your file personally until you are satisfied. Thank you for giving us the chance to put this right, {r_title}. I know the move was already a stressful time, and I want this part to be as simple as possible for you.",
        "If you have any questions, or if there is any other item from your move you are worried about, please call me at {phone} or write to {email}. Thank you for your patience, and again, I am truly sorry for the damage to your dresser. We will keep your file open until the matter is fully resolved."
      ]
    ],
    "details": [
      "Claim file {ref}: one oak four-drawer dresser (c. 1940s, inventory sticker No. 27) noted as 'cracked front left leg; gouge on top approx. 30 cm; lower drawer misaligned' at delivery to {street} on {date}.",
      "The move on {date} was booked under 'Released Value' protection at 60 cents per pound per article; the company has elected to waive that limit and pay restoration costs of up to {amount} under file {ref}.",
      "Our restoration partner, {company}, will inspect the dresser at {street} on {date2} between {time} and {time2}; a written estimate will be sent to {sender} and the customer within {number} business days.",
      "The crew lead, {p1}, confirmed in a written statement dated {date} that the dresser was blanket-wrapped but not ratchet-strapped; {P1_he} has since completed the company's load securement refresher.",
      "A partial refund of {amount2} was issued to the card on file on {date2}; the original invoice ({ref2}) totalled {amount} for {number} hours of labour, two movers and a 26 ft. truck.",
      "Under the Full Value Protection terms, the company may repair, replace or pay the current market value of the item, at its option, after consulting the customer by {date3}; see section 5(b) of the bill of lading for {ref} and the restorer's report from {company}.",
      "If the customer chooses an independent restorer, the estimate for file {ref} must be emailed to {email} by {date3}, with photos of the damage (front, top and drawer) and the restorer's GST No.",
      "Storage credit of {amount2} may be applied at our {city2} warehouse (climate-controlled units, 5 x 10 ft. and up) for up to {number} months, or issued as a cheque on request to {phone}."
    ]
  },
  {
    "id": "d01-intersection-collision",
    "kind": "report",
    "title": "Two-vehicle collision at an intersection",
    "orgs": [
      "{city} Regional Emergency Communications Centre",
      "North Island 911 Dispatch"
    ],
    "senderTitles": [
      "Emergency Call-Taker",
      "Police Dispatcher",
      "Communications Supervisor"
    ],
    "subjects": [
      "Two-vehicle collision, file {ref}",
      "MVI with minor injuries near {street}"
    ],
    "sections": [
      [
        "The first call came in at {time} from a driver who had stopped behind the crash. The caller said a pickup truck and a small hatchback had collided in the middle of the intersection near {street}. Both vehicles were still in the roadway with their hazard lights on. The caller could see steam rising from under the hood of the hatchback but no flames.",
        "A pedestrian waiting at the crosswalk called 911 to report that two vehicles had struck each other while turning. The caller sounded shaken but answered questions clearly. According to the caller, a grey minivan had turned left across the path of a delivery van. Traffic in both directions had come to a stop, and other drivers were getting out of their cars to look."
      ],
      [
        "The call-taker asked whether anyone was trapped or unconscious. The caller walked closer and reported that both drivers were out of their vehicles and talking. One driver was holding a wrist and the other complained of a sore neck. No one else appeared to be involved, and there were no children in either vehicle according to the drivers themselves.",
        "When asked about injuries, the caller spoke with both drivers through the open windows. One said a seatbelt had left a sore spot across the chest. A passenger in the other vehicle had a small cut on the forehead from broken glass and was pressing a scarf against it. Both people were awake, alert and able to give their own names."
      ],
      [
        "Police, fire and ambulance were dispatched together, since the caller could not rule out a fuel leak. The call-taker advised the caller to stay on the sidewalk, keep other people back from the vehicles and not move anyone who was hurt. The caller agreed to remain on the line until the first unit arrived and to report any change in the injured people.",
        "Units from all three services were sent under a single incident number. While they travelled, the caller was told to stay well away from passing traffic and to watch for any smoke or liquid spreading under the vehicles. The call-taker also asked the caller to tell the drivers not to restart their engines or try to push the vehicles to the curb."
      ],
      [
        "Fire crews arrived first at {time2} and found a small pool of coolant, not fuel, under the hatchback. They disconnected its battery as a precaution and spread absorbent on the pavement. Firefighters confirmed the earlier report: two adult drivers, both walking, with minor complaints. No other vehicles or pedestrians had been struck, and no damage was found to the traffic signals.",
        "On arrival, the fire captain reported that both vehicles had heavy front-end damage but no fluid leaks of concern. The airbags in one vehicle had deployed. Crews checked inside each vehicle for anyone missed and found only a dog crate, empty, in the back of the van. The captain asked for a tow truck for each vehicle and updated the injury count."
      ],
      [
        "Paramedics assessed both drivers at the roadside. The driver with the wrist injury was splinted and taken to {city} General Hospital for an X-ray in stable condition. The second driver declined transport after an examination and signed a refusal form. Paramedics advised that driver to see a doctor if the neck pain became worse over the next day.",
        "The ambulance crew cleaned and bandaged the passenger's forehead and checked the driver's chest. Neither person needed to go to hospital, according to the paramedics, though both were given written advice about delayed symptoms. A family member arrived to pick up the passenger. The crew cleared the scene and returned to service once police confirmed they no longer needed medical support."
      ],
      [
        "Police closed the northbound curb lane for about forty minutes while the vehicles were photographed and moved. An officer directed traffic through the intersection by hand. Traffic backed up several blocks during the evening rush, and the dispatcher posted a short road advisory to the public information line so that callers asking about delays could be told what was happening.",
        "One eastbound lane stayed closed while officers measured the scene and collected statements. A second officer set out traffic cones and waved vehicles through on the inside lane. Transit dispatch was notified because two bus routes pass through the intersection, and buses were briefly rerouted one block over to avoid the backup at the closed lane."
      ],
      [
        "Officers spoke with three independent witnesses. Two said the signal was a fresh green for the pickup, while the third was not sure. Both drivers exchanged insurance information at the scene. The investigating officer, {p1}, noted that road conditions were dry and visibility was good, and that neither driver showed signs of impairment during roadside conversations.",
        "Statements were taken from both drivers and from the pedestrian who first called 911. That witness, {p1}, told officers the minivan had its turn signal on but did not wait for a clear gap. A nearby store owner offered security camera video, and an officer arranged to collect a copy. Weather was overcast with light drizzle, but the pavement was not flooded."
      ],
      [
        "Both tow trucks cleared the scene shortly after, and the lane reopened once a city crew swept up broken glass. The file remains open pending review of witness statements. No charges had been laid at the time of this report, and the supervisor on shift reviewed the call recording and found that dispatch times met the centre's standard.",
        "The intersection was fully reopened after the debris was cleared and the signal timing was checked by a city technician. Police will follow up with the registered owners and with the insurance company about the camera footage. This record will be updated if a charge is approved or if either driver later reports a more serious injury."
      ]
    ],
    "details": [
      "Unit 4-Charlie (Cst. {p2}) arrived at approx. {time2} and reported the hatchback's front bumper detached; the vehicle was towed by {company} to its compound on {street2}, file {ref2}.",
      "Caller's callback number was confirmed as {phone}; the caller reported \"two people walking around, one holding an arm\" and said traffic was backed up approx. {km} toward {city2}.",
      "BCEHS crew No. {number} assessed the second driver (adult, alert, oriented x3) and noted a self-reported \"4/10\" neck pain; transport was declined at {time2} on {date}.",
      "Witness {p3} (callback {phone}) stated the pickup \"had the green\" and estimated its speed at approx. 40 km/h; statement recorded under file {ref} and forwarded to the traffic analyst.",
      "Road advisory issued at {time2}: \"northbound curb lane closed near {street}, expect delays\"; advisory cancelled after the city crew (e.g. sweeper truck T-{number}) finished cleanup.",
      "Insurance details exchanged at scene: Driver A with {company}, policy ending in {number}; Driver B with {company2}; both licences checked via CPIC with no flags (ref. {ref2}).",
      "Fire Engine {number} applied approx. two bags of absorbent to a coolant spill (non-hazardous) and confirmed the hatchback's 12-volt battery was disconnected; crew cleared at {time2} on {date}.",
      "Security footage from {company2} (camera facing {street}) was requested on {date}; the manager agreed to provide a USB copy by {date2}, and the request was logged under file {ref}."
    ]
  },
  {
    "id": "d02-overdue-hiker-located",
    "kind": "report",
    "title": "Overdue hiker located after a night out",
    "orgs": [
      "{city} Search and Rescue Society",
      "Mid-Island Emergency Communications"
    ],
    "senderTitles": [
      "SAR Search Manager",
      "Police Dispatcher",
      "Operations Coordinator"
    ],
    "subjects": [
      "Overdue hiker located, task {ref}",
      "Search for hiker on {date2}"
    ],
    "sections": [
      [
        "A family member called the non-emergency line late in the evening on {date} to report that a hiker had not come home. The caller said the hiker left that morning for a day trip on a ridge trail west of town and planned to be back before dark. Several text messages sent after supper had gone unanswered, and the phone now went straight to voicemail.",
        "The report came from a roommate who became worried when the hiker missed a dinner they had planned together. According to the roommate, the hiker had driven to a logging road trailhead alone and posted a photo from a lookout around noon. Nothing had been heard since. The roommate knew the hiker usually carried a headlamp but was not sure about extra clothing."
      ],
      [
        "The call-taker gathered a description: an adult of slim build wearing a red rain shell, black hiking pants and a grey toque, carrying a small green day pack. The hiker was described as fit and experienced on local trails but not familiar with this particular route. The caller had no knowledge of any medical conditions or medication the hiker might need overnight.",
        "Details collected on the call included the hiker's vehicle, a blue hatchback with a roof rack, and clothing: a yellow jacket, jeans and trail runners rather than boots. The roommate said the hiker had a mild asthma condition and normally carried an inhaler. The call-taker also recorded the hiker's cell phone number so the provider could be asked for a last known location."
      ],
      [
        "An RCMP member drove to the trailhead and found the hiker's vehicle parked and locked, with frost already forming on the windshield. There was no note on the dash. Because overnight temperatures were forecast to drop near freezing, the officer asked dispatch to activate search and rescue. The search manager was paged and called back within ten minutes to begin planning.",
        "Police confirmed the vehicle was in the gravel lot at the end of the logging road. A trail register at the gate showed the hiker's signature and an intended route, which matched what the roommate had said. Dispatch contacted the on-call search manager, who requested a hasty team for the main trail and asked that the cell provider check for a recent ping."
      ],
      [
        "Search teams assembled at the trailhead shortly after midnight. Two hasty teams of three went up the main trail with radios, whistles and spare warm clothing. A third group stayed at the command post to log radio traffic. Light rain started around two in the morning, which slowed the teams on the steep sections and made the trail markers hard to see.",
        "The search manager set up a command post in the back of the society's rescue truck. Searchers checked the main trail first, calling out the hiker's name every few minutes and listening for a reply. A drone with a thermal camera was flown along the ridge but could not see much through the low cloud. Teams rotated out after four hours to rest."
      ],
      [
        "At first light a team heard faint whistle blasts from below a switchback. Searchers followed the sound and found the hiker sitting under a large cedar about two hundred metres off the trail. The hiker had taken a wrong turn on a game path near dusk, decided it was safer to stay put, and built a small shelter out of branches and the pack.",
        "Shortly after sunrise, a searcher spotted the bright jacket through the trees in a creek gully. The hiker waved and called out. According to the hiker, a section of trail had washed out, and an attempt to go around it led downhill into thick brush. When the light failed, the hiker stopped next to the creek and waited for morning as recommended."
      ],
      [
        "The hiker was cold, tired and had a scraped knee, but was walking and talking normally. Searchers gave the hiker a dry fleece, a hot drink from a thermos and some food. A team medic checked for signs of hypothermia and found none of concern. The group then walked out together, taking about two hours to reach the trailhead at a steady pace.",
        "Searchers assessed the hiker on scene and found mild chills and a sore ankle that could still bear weight. The hiker had used the inhaler once during the night. After warm clothing and a snack, the hiker was helped up the slope with a rope for support on the steepest part. A waiting ambulance crew checked vital signs at the trailhead and found them normal."
      ],
      [
        "Paramedics offered transport to hospital, which the hiker declined. A family member drove the hiker home. The search manager thanked the volunteers and stood down all teams. The RCMP member confirmed with dispatch that the missing person file could be concluded, and the cell provider was told the location request was no longer needed.",
        "The hiker chose to go home rather than to the emergency department and was picked up by the roommate. All searchers were accounted for and signed out of the command post log. Police closed the file, and dispatch cancelled the request for help from the neighbouring search group, which had been on standby to send another team at noon."
      ],
      [
        "In the debrief, searchers noted that the hiker did several things right: leaving a trip plan, carrying a whistle and staying in one place once lost. The society will ask the regional district to repair the washout and add a clear trail marker at the junction where the wrong turn was made, since this is the second similar call this year.",
        "The search manager's debrief recommended a new sign at the trail fork and a reminder in the society's next public safety post about carrying a light, a whistle and an extra layer. Volunteers logged their hours for the provincial program. The hiker later sent a thank-you card to the society's hall, which was posted on the notice board."
      ]
    ],
    "details": [
      "Task No. {ref} was issued by EMBC at {time} on {date}; search manager {p1} requested {number} searchers, one K9 team (on standby) and thermal drone support from {company}.",
      "Last cell ping (approx. {km} west of the trailhead) was received at {time2}; the provider's \"accuracy radius\" was given as 300 m, and the result was logged under file {ref2}.",
      "Subject description per reporting party {p2} (callback {phone}): adult, slim build, red rain shell, grey toque, green day pack, last seen at {time}; experienced but \"new to this route.\"",
      "Hasty Team 2 (team leader {p3}) located the subject at approx. {time2} on {date2} below Switchback 7; GPS waypoint recorded and relayed to command via repeater channel \"SAR-2.\"",
      "Trailhead vehicle (blue hatchback, roof rack) confirmed by Cst. {p1_last} at {time}; frost on windshield, no note on dash; trail register entry matched the trip plan given by {p2}.",
      "BCEHS crew assessed the subject at the {city2} road trailhead at {time2} on {date2}: alert, mild chills, no signs of moderate hypothermia; transport declined and a release form was signed.",
      "Volunteer hours for task {ref}: {number} members, approx. {number2} hours each; mileage claims to be submitted to {org} by {date3} using the standard EMBC form (e.g. Form 101).",
      "Debrief note: the trail junction near the washout lacks a marker; request sent to {company2} for the regional district (ref. {ref2}) on {date3} asking for signage and a culvert check."
    ]
  },
  {
    "id": "d03-windstorm-power-outage",
    "kind": "report",
    "title": "Neighbourhood power outage after a tree fell on lines",
    "orgs": [
      "{city} Fire Rescue Dispatch",
      "Coastal Emergency Communications Centre"
    ],
    "senderTitles": [
      "Fire Dispatcher",
      "Shift Supervisor",
      "Emergency Call-Taker"
    ],
    "subjects": [
      "Lines down on {street}, incident {ref}",
      "Windstorm outage and wires down"
    ],
    "sections": [
      [
        "During a strong southeast windstorm on {date}, a resident called 911 to report a loud bang and a flash outside the house, followed by the lights going out on the whole block. Looking out the front window, the caller could see a large fir lying across the road with power lines tangled in its branches. One line was sparking where it touched the wet pavement.",
        "A caller on a cell phone reported that a tall alder had snapped in the wind and fallen onto the wires at the corner near {street}. The caller was standing at the end of a driveway and could hear a humming sound from a line hanging low over the sidewalk. Several houses nearby had gone dark, and the street lights were also out."
      ],
      [
        "The call-taker told the caller to stay indoors, keep at least ten metres away from the tree and the wires, and warn anyone outside to do the same. The caller was asked whether any vehicles or people were under the tree. The caller said a parked car had a dented roof but was empty, and nobody appeared to be hurt.",
        "The caller was instructed to back away immediately and treat every wire as live, even one that looked quiet. The call-taker asked about people nearby, and the caller reported a neighbour walking a dog toward the corner. The caller shouted a warning, and the neighbour turned around. No one had touched the lines, and no injuries were reported on the call."
      ],
      [
        "Fire dispatch sent an engine to secure the area, and the call-taker notified the electrical utility's emergency line with the exact location and a description of the sparking line. The utility confirmed it was already seeing an outage on that circuit and gave an estimate of a crew within two hours, warning that dozens of other trees were down across the region.",
        "An engine company was assigned to stand by the hazard. Dispatch phoned the power utility's priority line for emergency services, which logged the report as wires down with fire on scene. The utility representative said a crew would be sent as soon as one was free, but storm calls were stacking up and no firm arrival time could be given yet."
      ],
      [
        "Firefighters arrived and taped off the road for half a block in each direction. The captain confirmed the earlier report: a primary line was on the ground and had scorched a patch of grass beside the curb, though no fire had spread. Crews went door to door on the closest houses to tell residents to stay inside and away from the downed wires.",
        "On arrival, the engine crew placed traffic cones and caution tape across both ends of the street. The captain reported that the low-hanging line was still energized and that a transformer on the next pole was leaning. Firefighters kept watch from a safe distance and turned back two drivers who were trying to get around the tape to reach their homes."
      ],
      [
        "Over the next hour, the call centre received many calls from residents in the area asking when power would return. Call-takers explained that the utility handles restoration and gave out the utility's outage line. One caller reported a home oxygen concentrator without power, and an ambulance was sent to check on that resident as a precaution and to arrange backup oxygen.",
        "Calls about the outage increased as the evening went on. Most people only wanted information and were referred to the utility's outage map. A care home on the edge of the affected area called to confirm its generator had started. An elderly resident who lived alone called because a basement sump pump had stopped, and fire crews later helped move items off the floor."
      ],
      [
        "The utility crew arrived late in the evening and de-energized the line before cutting the tree away from the wires. Once the crew confirmed the area was safe, firefighters handed over the scene and returned to the hall. Public works was asked to bring a loader to clear the trunk from the travel lanes so the road could reopen in the morning.",
        "When the line crew reached the scene they isolated the circuit at a switch up the street and grounded the fallen wire. Fire crews were released after the utility supervisor took control of the site. The tree was too large to move by hand, so the city's roads department was requested to cut and remove it once daylight returned."
      ],
      [
        "Power was restored to most homes on the block shortly after midnight, while a few houses closest to the damaged pole stayed dark until the next afternoon. No injuries were reported in connection with this incident. The damaged parked car was noted for the owner's insurance claim, and a photo was taken by the fire captain.",
        "Restoration happened in two stages. About half of the affected homes had power back within four hours, and the rest were reconnected after a new pole was set the following day. The road was reopened after the tree was removed. Dispatch staff noted that the call volume during the storm peaked at roughly three times the normal level."
      ],
      [
        "This report was completed at the end of the shift. The supervisor reminded staff that during wind events, all downed wire calls should be dispatched as a fire response first, with the utility notified on the priority line rather than the public number. The incident was closed after the utility confirmed its work was complete.",
        "The incident was closed once the line crew left and the roads department confirmed the tree was cleared. In the shift notes, the supervisor recorded which callers had medical equipment needing power, so that those addresses can be flagged for a welfare check in future outages. No complaints about response times were received."
      ]
    ],
    "details": [
      "Utility priority line contacted at {time} (ext. {number}); trouble ticket No. {ref2} assigned to \"Wires Down - Fire Standing By,\" with crew ETA given as approx. {time2}.",
      "Engine {number} (Capt. {p1}) reported a 25-kV primary on the ground at {street}; scene taped approx. 50 m each way and residents of {number2} homes advised to shelter in place.",
      "Caller {p2} (callback {phone}) reported a \"blue flash and a bang\" at approx. {time}; parked sedan under the fir had a dented roof and was unoccupied per the caller's observation.",
      "Medical-equipment check: resident at {street2} uses an oxygen concentrator; Medic {number} attended at {time2} and the family arranged portable cylinders from {company}.",
      "Outage figures provided by the utility at {time2}: approx. {bignumber} customers without power in {city} and {city2}; restoration for {street} estimated by {date2}.",
      "Roads department (on-call supervisor {p3}) arranged a loader and a contractor, {company2}, to remove the trunk on {date2}; road closure under file {ref} lifted at {time2}.",
      "Care home generator confirmed running at {time}; the facility's maintenance lead, {p3_title}, reported approx. {number} hours of diesel on hand and was given the EOC line, {phone}.",
      "Call volume note for {date}: {bignumber} calls taken between {time} and {time2} (approx. {percent} storm-related, e.g. outages, trees, wires); no calls were abandoned over 60 seconds."
    ]
  },
  {
    "id": "d04-water-main-break",
    "kind": "report",
    "title": "Water main break flooding a road",
    "orgs": [
      "{city} Public Works After-Hours Dispatch",
      "{city} Emergency Communications"
    ],
    "senderTitles": [
      "After-Hours Dispatcher",
      "Utilities Duty Supervisor",
      "Emergency Call-Taker"
    ],
    "subjects": [
      "Water main break, work order {ref}",
      "Flooded roadway on {street}"
    ],
    "sections": [
      [
        "Shortly before dawn on {date}, a newspaper carrier phoned 911 to report water bubbling up through cracks in the asphalt near {street}. By the time the call was answered, the caller said, the water was running down the hill like a creek and pushing gravel into the gutter. A section of the curb lane looked as if it had lifted slightly.",
        "A homeowner called to report a sudden drop in water pressure and a rushing sound from the street. Stepping outside, the caller found the road covered in moving water from one curb to the other. The water appeared to be coming from a manhole cover that was rattling and spraying. The caller also noticed water starting to pool in a neighbour's driveway."
      ],
      [
        "The call-taker asked whether any vehicles were stuck or anyone was in the water. The caller said one car had driven through slowly and made it out, but the water looked deeper at the low point near the storm drain. The call-taker advised the caller not to walk into the water, since a road surface can wash out from underneath without warning.",
        "No one was in danger at the time of the call, according to the caller. The call-taker asked the caller to keep children and pets away and to stay out of the flowing water, which could be hiding an open hole. The caller agreed to watch from the porch and report if the water reached any houses or if the road began to sink."
      ],
      [
        "Police were sent to close the road, and the call was transferred to the city's after-hours public works dispatcher. The on-call water crew was paged and given the address. While crews were on their way, a police officer reported that the water was about ankle deep across both lanes and that a small sinkhole had formed beside the centre line.",
        "Dispatch notified police for traffic control and called the city's on-call utilities supervisor at home. The supervisor sent the standby crew with a vacuum truck and asked police to set up a closure at both ends of the block. The first officer on scene confirmed that the flooding was spreading and that the pavement had cracked in a long line."
      ],
      [
        "The utilities crew located the nearest valves using the city's map and began closing them one at a time. It took about forty minutes to isolate the break because one valve was buried under a recent repaving job. Once the flow stopped, the crew found that a cast iron pipe from the early 1960s had split along its length.",
        "Crew members shut off the main by turning several valves along the street, which cut water to the surrounding homes. As the water drained away, a hole about the size of a kitchen table was exposed in the curb lane. The crew foreman reported that the pipe was old and had likely failed because of pressure changes after a cold night."
      ],
      [
        "Because the break caused a loss of pressure in the system, the city's water quality staff reviewed whether a boil-water advisory was needed. A pressure drop can let dirty water enter the pipes. The supervisor decided on a precautionary advisory for the affected streets until test samples came back clean, and staff began printing door hangers for the area.",
        "The duty supervisor contacted the water quality technician, who recommended a precautionary boil-water notice for homes on the isolated section. Since the pipes had been open to the trench during the repair, there was a chance of contamination. Residents would be told to boil drinking water for one minute until lab results confirmed the water was safe to use."
      ],
      [
        "Crews hand-delivered notices to every address on the block and posted the advisory on the city website and social media. Dispatchers fielded calls from residents asking whether the water was safe for bathing, and were given a short script: bathing is fine for adults, but drinking water, ice and baby formula should be made with boiled or bottled water.",
        "The communications office issued a short public notice by mid-morning. Call-takers received several questions from residents about pets, dishwashers and coffee makers. They referred detailed questions to the water quality line and reminded callers that filters on fridges do not remove bacteria. A local grocery store agreed to keep extra bottled water stocked for the day."
      ],
      [
        "The repair was finished by late afternoon, and the line was flushed and refilled slowly to avoid another surge. Samples were sent to the lab that evening. The road remained closed overnight while the trench was backfilled with gravel, and a temporary asphalt patch was laid the next morning so that one lane could reopen.",
        "A repair clamp was installed on the split pipe, and crews flushed hydrants along the street until the water ran clear. Lab samples were collected at three taps. The road stayed down to a single lane for two days while paving crews rebuilt the base, and police were released once barricades and signs were in place."
      ],
      [
        "Two rounds of samples came back with no bacteria detected, and the boil-water advisory was lifted. The city has added this block to the list for main replacement next year. One homeowner reported water in a basement, and that claim was referred to the city's risk management office for follow-up.",
        "The advisory was cancelled after lab results met provincial standards, and residents were notified by door hanger and online post. Public works recorded this as the third break on the same pipe section in five years. A claim for a flooded garage was referred to the city's insurer. The work order was closed once paving was complete."
      ]
    ],
    "details": [
      "Work order {ref} opened at {time} on {date}; on-call foreman {p1} reported a 150-mm cast-iron main split approx. 2 m long at {street} and requested a vacuum truck from {company}.",
      "Valve V-{number} was found buried under new asphalt and had to be located with a metal detector; isolation completed at {time2}, affecting approx. {number2} service connections.",
      "Precautionary boil-water advisory (ref. {ref2}) issued for {street} and {street2} on {date}; door hangers delivered to {bignumber} addresses by staff and volunteers.",
      "Water quality technician {p2} collected samples at three taps (e.g. \"Site A - community hall\") on {date2}; results from {company2} showed no total coliforms, and a second round was drawn on {date3}.",
      "Caller {p3} (callback {phone}) reported water \"running like a creek\" and a manhole lid \"rattling and spraying\"; the call was transferred to public works at {time}.",
      "Police unit {number} closed the road between {street} and {street2} at {time}; the detour used the parallel lane and signs were later supplied by {company} (ref. {ref}).",
      "Repair details: one 150-mm full-circle stainless clamp installed; hydrant flushing ran approx. {number} minutes; trench backfilled with crushed gravel and temporary cold-mix patch on {date2} by {company2}.",
      "Damage claim from the resident at {street2} (flooded garage, approx. {amount} estimated) was referred to risk management on {date2} under claim No. {ref2} for review by {date3}."
    ]
  },
  {
    "id": "d05-rental-noise-complaint",
    "kind": "report",
    "title": "Repeated noise complaint at a rental property",
    "orgs": [
      "{city} RCMP Detachment Dispatch",
      "{city} Bylaw and Police Communications"
    ],
    "senderTitles": [
      "Police Dispatcher",
      "Bylaw Enforcement Officer",
      "Watch Commander"
    ],
    "subjects": [
      "Noise complaint follow-up, file {ref}",
      "Repeat noise calls at {street}"
    ],
    "sections": [
      [
        "Just after midnight on {date}, a neighbour called the non-emergency line to complain about loud music and shouting from a short-term rental house next door. The caller said this was the third weekend in a row. The bass was rattling the caller's bedroom window, and a group of people was standing on the back deck yelling over the music.",
        "A resident phoned the police non-emergency line at about eleven at night to report a party at a rental home across the street. According to the caller, cars were parked on lawns and blocking a fire hydrant, and people were setting off small fireworks in the yard. The caller said similar parties had happened there several times since the spring."
      ],
      [
        "The call-taker asked whether anyone appeared to be in danger, whether there were weapons, and whether the caller had seen fighting. The caller said no, it was just very loud. The caller did not want to go over and speak to the guests directly, and asked to remain anonymous because of past tension with the property manager.",
        "When asked about safety concerns, the caller mentioned that the fireworks had landed close to a cedar hedge, which was dry after a warm week. The caller had not seen any fights or weapons. The call-taker recorded the caller's name and number but noted the request that it not be shared with the people at the rental."
      ],
      [
        "A patrol unit was dispatched once higher-priority calls were cleared, arriving about forty minutes later. The officer reported hearing amplified music from the sidewalk and counted roughly twenty people on the deck and in the yard. The officer spoke with the guest who had booked the rental, who agreed to turn off the speakers and move everyone inside.",
        "Two officers attended. From the street they could see smoke from a portable fire pit and hear music from an outdoor speaker. They spoke with several guests and asked them to shut down the fireworks, put out the fire pit and move vehicles off the neighbour's lawn. The guests complied, and the hydrant was cleared within a few minutes."
      ],
      [
        "The officer checked back about half an hour later and found the music off and the yard empty. The neighbour was called back and confirmed things had quieted down. The call was closed with a note that the property had previous complaints, and the file was flagged for referral to the city's bylaw department the following Monday.",
        "On a second pass, the street was quiet and the fire pit was out. The officers did not issue tickets that night but left a business card with the guest in charge. The caller was told that repeat incidents at the same address would be passed to bylaw services, which can deal with the owner rather than just the guests."
      ],
      [
        "A bylaw officer reviewed the file and found four noise calls to the address over two months, all on weekends. The house is listed on a vacation rental website. The officer confirmed that the owner does not live in {city} and that the property is managed by a local company that handles bookings, cleaning and key pickup for several homes.",
        "Bylaw services pulled the call history for the address and found five complaints since May. Records showed the owner held a short-term rental licence that requires a local contact who can attend within an hour when problems are reported. The bylaw officer called the listed contact number twice before reaching someone at the management company."
      ],
      [
        "The bylaw officer sent a warning letter to the owner explaining the noise bylaw, the quiet hours of eleven at night to seven in the morning, and the fines for repeat violations. The letter also asked the owner to post the house rules inside the rental and to cap the number of overnight guests in line with the licence conditions.",
        "A meeting was held with the property manager, who agreed to add a noise monitoring device that sends an alert when sound levels stay high for more than ten minutes. The manager also agreed to post quiet hours on the listing and to require a larger damage deposit for group bookings. These steps were written into a compliance plan."
      ],
      [
        "Since the warning letter, police have received one further call about the address, which was about a car alarm rather than a party. The neighbour who made the original complaint told bylaw staff that weekends had been noticeably quieter. The file will stay open for ninety days so that any new complaints are linked to this history.",
        "In the weeks after the meeting, no new noise complaints were logged. The manager reported that the monitoring device had triggered once and that staff had called the guests, who turned the music down. Bylaw will check the property again during the summer. If complaints return, the next step is a fine and a review of the rental licence."
      ],
      [
        "This report summarizes the police and bylaw contact with the property. Officers are reminded that repeat noise addresses should be noted in the call history so the next call-taker can see the pattern quickly. No charges were laid, and no injuries or property damage were reported during any of the calls.",
        "The record was updated so future call-takers will see a premise note on the address listing the property manager's after-hours number. Officers on patrol can call that number directly instead of waiting for the guests to respond. No arrests or charges resulted, and the matter is considered resolved for now, pending any further reports."
      ]
    ],
    "details": [
      "Premise history for {street}: noise calls on {date}, {date2} and {date3}; all between 23:00 and 02:00, with the most recent one taken at {time} (file {ref}).",
      "Reporting party {p1} (callback {phone}) requested anonymity; caller described \"bass rattling the window\" and approx. {number} people on the rear deck at the time of the call.",
      "Cst. {p2} arrived at {time2}; the registered guest, {p3}, produced a booking confirmation from {company} and agreed to move all guests indoors and disconnect the outdoor speaker.",
      "Bylaw warning letter (ref. {ref2}) mailed to the owner on {date2}, citing Noise Bylaw No. {number} and a minimum fine of {amount} for a second offence within 12 months.",
      "Short-term rental licence condition 4(b): a local contact must attend within 60 minutes of a complaint; the listed contact at {company2} was reached at {time} on the second attempt via {phone}.",
      "Compliance plan signed on {date3} by {p3_title} of the management firm: decibel monitor installed, occupancy capped at {number} overnight guests, and a {amount2} damage deposit for groups.",
      "Fireworks report: small \"fountain\" type devices set off in the yard at {street} near a dry cedar hedge at approx. {time}; no fire resulted, and the guests surrendered {number} unused devices.",
      "Premise note added on {date2}: \"Short-term rental; manager after-hours line {phone}; repeat noise address, see file {ref}\"; note to be reviewed by {date3}."
    ]
  },
  {
    "id": "d06-gas-odour-apartment",
    "kind": "report",
    "title": "Natural gas odour in an apartment building",
    "orgs": [
      "{city} Fire Rescue Communications",
      "Island Regional Fire Dispatch"
    ],
    "senderTitles": [
      "Fire Dispatcher",
      "Duty Officer",
      "Communications Supervisor"
    ],
    "subjects": [
      "Gas odour at {street}, incident {ref}",
      "Apartment evacuation for gas smell"
    ],
    "sections": [
      [
        "At {time} on {date}, a tenant called 911 from the sidewalk outside a four-storey apartment building to report a strong smell of rotten eggs in the third-floor hallway. The caller had already left the building. Other tenants were still inside, the caller said, and some were cooking dinner. The smell seemed strongest near the laundry room and the stairwell door.",
        "The building caretaker called 911 to report that several tenants had complained of a gas smell on the ground floor near the boiler room. The caretaker had smelled it too and said it was getting stronger. The caller was calling from inside the lobby, so the call-taker immediately advised the caretaker to leave the building and continue the call from outside."
      ],
      [
        "The call-taker gave safety instructions: do not use light switches, elevators or anything that could make a spark, do not try to find the leak, and leave doors open on the way out if it is safe. The caller asked whether to pull the fire alarm. The call-taker advised that alarms can spark, and fire crews would decide how to evacuate.",
        "Following the gas leak card, the call-taker told the caller not to turn anything on or off, not to use a lighter or phone inside, and to keep people away from the doors. The caller said tenants were starting to come down the stairs on their own after hearing neighbours talk about the smell. Nobody had reported feeling dizzy or unwell."
      ],
      [
        "A full first-alarm assignment was dispatched, including two engines, a ladder truck and the duty officer. Dispatch also called the gas utility's emergency line with the address and the caller's description. The utility advised that a technician would respond with a gas detector and confirmed it had no planned work in the area that evening.",
        "Two engines and a rescue unit were sent, and the gas utility was notified by phone. Because the building has a seniors' floor, the duty officer added an ambulance to stand by. The utility dispatcher confirmed the building had a large commercial meter at the rear and said a crew would come with tools to shut it off if needed."
      ],
      [
        "The first engine arrived and the crew used a portable gas monitor in the entrance. Readings were above normal in the hallway and climbed near the boiler room. The captain ordered a full evacuation. Firefighters knocked on every door, floor by floor, and helped two residents who use walkers get down the stairs safely to the street.",
        "On arrival, firefighters confirmed the smell at the front door. Their meter detected gas in the stairwell, though below the level where it could ignite. The captain had crews check each unit while others shut off power to the common areas from the main panel outside. Most tenants had already gathered across the street in the parking lot of a church."
      ],
      [
        "When the utility technician arrived, the gas was shut off at the meter. The source was traced to a loose fitting on the hot water boiler that had worked free. Firefighters opened windows and used a fan at the entrance to push fresh air through the building. Readings slowly fell back to zero over about forty minutes.",
        "The utility crew closed the main valve outside, and the technician followed the readings to a cracked connector on a clothes dryer in the shared laundry room. A firefighter set up a ventilation fan in the stairwell door while others opened hallway windows. Within half an hour, the meter showed no gas in any part of the building."
      ],
      [
        "Paramedics checked one tenant who reported a mild headache. The tenant was assessed on scene, given water and released with advice to call back if symptoms changed. No one was taken to hospital. A city transit bus was brought in to give tenants a warm place to wait, since it was raining and some had left without coats.",
        "Tenants were kept outside for about an hour and a half. The church opened its hall so that people could wait out of the cold, and a few volunteers handed out tea. Paramedics checked on an older tenant who felt short of breath from the walk downstairs. The tenant recovered after resting and did not need to go to hospital."
      ],
      [
        "Once every unit had been checked with the meter, residents were allowed back in. The boiler was left off until a licensed gas fitter could make repairs, so the building had no hot water overnight. The utility placed a red tag on the boiler, and the building manager was told the gas would stay off to that unit until it passed inspection.",
        "Residents returned once the fire captain and utility technician agreed the building was clear. The laundry room was locked and the faulty dryer was tagged out of service. Gas service to the rest of the building was turned back on, and the technician relit pilot lights in several units. The property manager was told to have a fitter inspect all shared appliances."
      ],
      [
        "The fire department will send a follow-up letter to the property owner asking for proof that the boiler was repaired by a licensed contractor. The duty officer noted that tenants did the right thing by leaving quickly and calling from outside. The incident was closed after the last crew cleared the scene.",
        "Fire prevention staff will visit the building to review the alarm panel and evacuation signs, since some tenants were unsure where to go. The call-taker's instructions were reviewed by the supervisor and found to match the gas leak protocol. This incident was closed once the utility confirmed its work was done for the night."
      ]
    ],
    "details": [
      "Engine {number} (Capt. {p1}) recorded a peak reading of {percent} LEL near the boiler room at {time}; evacuation ordered and approx. {number2} tenants accounted for at the muster point.",
      "Gas utility emergency line notified at {time}; technician {p2} arrived at {time2} and locked out the meter, ticket No. {ref2}, with a red tag placed on the appliance.",
      "Caller {p3} (callback {phone}) reported a \"rotten-egg\" smell strongest near the third-floor laundry room; caller was outside the building at {street} when the call was answered.",
      "Medic {number} assessed one adult tenant (mild headache, alert, normal SpO2) at {time2} on {date}; treated on scene and released, with advice to call 911 if symptoms worsened.",
      "Transit bus No. {number} was requested from {company} at {time} to shelter tenants from rain; it was released at {time2} once re-occupancy was approved.",
      "Re-occupancy approved after each of the {number} units read 0% LEL on a calibrated four-gas meter (e.g. CO, H2S, O2, LEL); the duty officer signed off at {time2} under incident {ref}.",
      "Fire prevention follow-up letter (ref. {ref2}) to be mailed to the owner, {p3_title}, on {date2}, requesting a licensed gas fitter's invoice from {company2} by {date3}.",
      "At approx. {time}, two tenants with mobility aids were assisted down the north stairwell by firefighters; both were seated in the church hall at {street2} and checked by paramedics on {date}."
    ]
  },
  {
    "id": "d07-wildfire-evacuation-alert",
    "kind": "notice",
    "title": "Wildfire evacuation alert for a rural area",
    "orgs": [
      "{city} Valley Regional District Emergency Operations",
      "Upper {city} Emergency Program"
    ],
    "senderTitles": [
      "Emergency Program Coordinator",
      "EOC Director",
      "Information Officer"
    ],
    "subjects": [
      "Evacuation Alert issued, {date}",
      "Wildfire alert: be ready to leave"
    ],
    "sections": [
      [
        "An Evacuation Alert is now in effect for rural properties along the valley road west of {city}. A wildfire burning on the slopes above the area has grown in size since yesterday because of hot, dry weather and gusty afternoon winds. An alert does not mean you must leave now. It means you should be ready to go on short notice.",
        "Residents in the rural area north of the highway are advised that an Evacuation Alert has been issued because of a nearby wildfire. Fire crews and helicopters are working on the fire, but the forecast calls for wind shifts that could push it toward homes. Please take this alert seriously and start preparing your household today."
      ],
      [
        "An alert is the first step. If the fire moves closer, the alert may be upgraded to an Evacuation Order, and you would then be required to leave immediately. Orders are delivered by door-to-door visits from police and volunteers, by text and email through the regional alert system, and by updates on local radio stations.",
        "There are two levels of warning. An alert asks you to get ready. An order tells you to leave right away by the route given. If an order comes, you may have only minutes, so do not wait until then to pack. Sign up for the regional emergency notification system so you will receive messages on your phone."
      ],
      [
        "Pack a grab-and-go bag for each person with at least three days of supplies: drinking water, easy food, a flashlight, a battery radio, spare batteries, a phone charger, copies of identification and insurance papers, and a change of clothes. Include any prescription medication, glasses and hearing aid batteries. Keep the bags near the door.",
        "Put together an emergency kit that can be loaded into a car in a few minutes. Good items include water, snacks, important documents in a sealed bag, cash in small bills, medications for at least a week, phone chargers and a printed list of phone numbers. Children may want a favourite toy or blanket, which can help keep them calm."
      ],
      [
        "Plan for your animals now. Have carriers, leashes, food and medication ready for pets. If you have livestock, decide where they can go and how you will move them. A volunteer group in {city2} is coordinating trailers and temporary space for horses and other large animals. Contact them early, as space fills quickly.",
        "If you keep animals, act ahead of time. Load pet supplies in the car and place carriers near the door. Owners of horses, goats or other livestock should consider moving them out of the alert area now, while the roads are clear. If you cannot move livestock yourself, register them with the agricultural volunteer team so they can help."
      ],
      [
        "Keep your vehicle fuelled and parked facing out of the driveway. Know at least two ways out of your area, since a road may close without warning. Arrange a meeting place for family members who may be at work or school when an order is issued, and make sure everyone knows who to call to check in.",
        "Fill your gas tank and keep your car keys in a set place. Back the vehicle into the driveway so you can leave quickly. Agree on a meeting spot outside the area with everyone in your home, including teenagers and anyone who works shifts. Write down an out-of-town contact who can pass messages between family members."
      ],
      [
        "Around your home, move firewood, propane tanks and patio furniture away from walls and decks. Clear dry leaves and needles from gutters and roofs. Close windows and vents before you leave so embers cannot blow inside. Do not stay behind to defend your home if an order is issued, because roads may become blocked by smoke.",
        "You can lower the risk to your property by raking up dry grass and needles near the house, moving anything that burns at least ten metres away, and connecting garden hoses so firefighters can use them. Never climb onto a roof during heavy smoke. When it is time to leave, close all doors and windows but leave them unlocked."
      ],
      [
        "If you need help leaving because of a disability, a medical condition or a lack of transportation, please register now with the emergency program so a ride can be arranged ahead of time. Neighbours are encouraged to check on older residents and people who live alone and to make sure they know about this alert.",
        "Residents who do not drive or who need help moving should contact the emergency operations centre today. We can arrange transport and accessible lodging in advance. Please look in on neighbours who may not have internet or cell service. A paper copy of this notice is also being left at the community hall and the general store."
      ],
      [
        "A reception centre will open at the community recreation centre in {city2} if an order is issued. Evacuees should register there to receive help with lodging, meals and other needs. Updates will be posted twice daily, and this alert will stay in place until fire officials say the risk to the area has passed.",
        "If an order is issued, evacuees should go to the reception centre at the arena in {city2}, where volunteers will register people and arrange food and lodging. Please register even if you are staying with friends, so we know you are safe. Further updates will be shared as conditions change."
      ]
    ],
    "details": [
      "Evacuation Alert No. {ref} applies to {bignumber} properties in Electoral Area \"C\" between {street} and the {city2} boundary, effective {time} on {date}.",
      "The fire (BC Wildfire incident {ref2}) was estimated at approx. {bignumber} hectares at {time}; it is located about {km} northwest of the valley road and is classed as \"out of control.\"",
      "Register for alerts at the regional website or call the EOC line, {phone}; residents without internet may sign up in person at the community hall on {date2} between {time} and {time2}.",
      "Livestock coordination: contact {p1} of the {city2} Agricultural Emergency Team (cell {phone}); trailers available for approx. {number} horses at the fairgrounds (e.g. Barn B).",
      "Reception centre, if activated: {city2} Arena, {street2} (ESS lead {p2}, {phone}); Emergency Support Services (ESS) volunteers will provide 72-hour vouchers for food and lodging; bring ID and a list of medications.",
      "Transport assistance requests should be made by {time2} on {date2} to {email} or by phone at {phone}; include the number of people, mobility aids, and any pets travelling.",
      "Next scheduled update: {date2} at {time}, posted by {p3} to the regional district's website and local radio (e.g. 98.5 FM); an update will be issued sooner if conditions change.",
      "Campfire and open burning bans (Category 1, 2 and 3) remain in effect across the {city} fire zone until {date3}; violation fines start at {amount} under the Wildfire Act."
    ]
  },
  {
    "id": "d08-suspicious-vehicle-school",
    "kind": "report",
    "title": "Suspicious vehicle near an elementary school",
    "orgs": [
      "{city} Police Communications Centre",
      "South Island Police Dispatch"
    ],
    "senderTitles": [
      "Police Dispatcher",
      "Patrol Sergeant",
      "Emergency Call-Taker"
    ],
    "subjects": [
      "Suspicious vehicle near school, file {ref}",
      "Vehicle check near {street}"
    ],
    "sections": [
      [
        "At {time} on a school day, a parent called the police non-emergency line about a car that had been parked across from the elementary school for most of the morning. The caller had noticed it at drop-off and again two hours later. According to the caller, a person was sitting in the driver's seat with the engine running and appeared to be watching the playground.",
        "A school secretary phoned police to report a white van that had pulled up beside the field fence during morning recess. Staff on yard duty said the driver seemed to be taking photos. The secretary stressed that no one had approached any children and the van had not moved since it arrived. The principal had already brought the students inside early as a precaution."
      ],
      [
        "The call-taker asked for a description. The caller said the vehicle was a dark green four-door sedan, older model, with a dented rear bumper and a roof rack. The caller read out a partial plate from across the street. The driver was described as an adult wearing a baseball cap and sunglasses. The caller did not see any weapons.",
        "The secretary gave a description relayed from staff: a white cargo van with ladder racks on top and no company logo, with a full plate that a teacher had written down. The driver was an adult in a high-visibility vest. The call-taker asked whether the van had any writing, damage or stickers, and the secretary said there was a small parking pass on the dash."
      ],
      [
        "The call-taker ran the plate through police databases, which showed the vehicle was registered locally and not reported stolen. There were no warnings or flags attached to the registered owner. The call was given a priority response because of the location, and a patrol unit nearby was assigned and asked to approach without lights or sirens.",
        "A records check on the full plate showed the van was registered to a local contracting business. No alerts were attached to the vehicle. Because the call involved a school, a patrol car and the school liaison officer were both sent. The call-taker kept the secretary on the line to report if the van left and in which direction."
      ],
      [
        "The responding officer parked behind the sedan and spoke with the driver through the window. The driver explained that they were waiting to pick up a grandchild for a medical appointment and had arrived early because the bus schedule was confusing. The officer confirmed the story with the school office, which had a note in the child's file about the early pickup.",
        "The officer spoke with the driver, who said the company had been hired to inspect gutters on the school roof and was waiting for the custodian to unlock the gate. The photos were of the roofline. The officer checked with the district facilities office by phone, which confirmed a work order for that morning. The custodian arrived a few minutes later."
      ],
      [
        "The officer did not find anything of concern and noted that the driver was cooperative and calm. The officer suggested that next time the driver check in at the office on arrival so staff would know why someone was waiting. The driver agreed and moved the car into the school's visitor parking area, where it would be in view of the office.",
        "No offence was found. The officer reminded the contractor that work crews at schools should sign in at the office and wear visible identification before setting up. The driver apologized for causing concern. The school liaison officer spoke briefly with the principal to explain what had happened and to confirm students could return outside."
      ],
      [
        "The parent who called was contacted afterward and told that the vehicle had been checked and there was no risk to students. The caller was thanked for reporting it. The school principal was also updated and decided to send a short note home reminding families that visitors must check in at the front office.",
        "The original caller was given a callback and told the outcome in general terms, without the driver's personal details. The principal decided to send a message to families explaining that a contractor had been on site and that police had confirmed there was no concern. Recess resumed at its normal time in the afternoon."
      ],
      [
        "The officer added a short note to the file with the driver's name and the reason for the visit, so that any repeat call about the same vehicle could be matched quickly. The call was cleared about twenty-five minutes after it was received. No further calls were made about the vehicle that day.",
        "The call was cleared once the officer left the school grounds. The contractor's details were recorded in the file in case of further reports. The district facilities manager said future work orders would include a reminder that crews must call ahead to the school office, especially on days when students are outside."
      ],
      [
        "This record shows how a cautious report from the public led to a quick check that turned out to be harmless. Call-takers are reminded to collect plates and descriptions in full and to ask about direction of travel even when the vehicle is parked, in case it leaves before police arrive.",
        "Staff did well to note the full plate and to keep students inside while the vehicle was checked. The liaison officer will speak at the next school staff meeting about how to report concerns and what details are most useful to police. The file was concluded with no further action required."
      ]
    ],
    "details": [
      "Vehicle described by caller {p1} (callback {phone}): dark green 4-door sedan, older model, dented rear bumper, roof rack; partial plate read as \"K?7 - 3??\" at approx. {time}.",
      "CPIC and ICBC queries on plate {ref2} returned \"no hits\"; registered owner {p2} of {city2}, no warnings, vehicle not reported stolen; queries run at {time}.",
      "Unit {number} (Cst. {p3}) arrived at {time2} and approached on foot from the rear; driver identified by B.C. licence, cooperative, and gave a reason that was confirmed by the school office.",
      "Contractor's work order (No. {ref}) from the school district was confirmed by phone with facilities staff at {time2}; the crew from {company} was there to inspect gutters and downspouts.",
      "The principal, {p2_title}, held students indoors from {time} to {time2} as a precaution; recess resumed after the liaison officer gave the all-clear on {date}.",
      "Direction of travel was not applicable (vehicle remained parked on {street}); the call-taker kept the caller on the line for approx. {number} minutes to report any movement (file {ref}).",
      "Follow-up: school liaison officer to present \"Reporting Concerns: What Police Need\" at the staff meeting on {date2}; handout to include the non-emergency line, {phone}, and contact {email}.",
      "Premise note added for {street}: \"Contractor vehicles from {company} may attend for roof work; confirm with district facilities (ext. {number}) before dispatching as suspicious.\""
    ]
  },
  {
    "id": "d09-highway-rockslide-closure",
    "kind": "notice",
    "title": "Highway closure due to a rockslide",
    "orgs": [
      "Island Highway Maintenance Services",
      "{city} Area Road Operations"
    ],
    "senderTitles": [
      "Road Operations Manager",
      "Public Information Officer",
      "Duty Manager"
    ],
    "subjects": [
      "Highway closed by rockslide near {city}",
      "Rockslide closure and detour, {date}"
    ],
    "sections": [
      [
        "The highway between {city} and {city2} is closed in both directions after a rockslide came down onto the road early this morning. Heavy rain over the past three days loosened a section of the rock cut above the northbound lanes. No vehicles were struck and no one was hurt, but large boulders and mud now cover both lanes and the shoulder.",
        "Travellers are advised that the main highway is fully closed at the rock cut north of {city}. A slide of rock and soil came down during the night after a long stretch of wet weather. A passing truck driver reported it to 911 just before dawn. Nobody was injured, but the debris pile is several metres high and blocks all lanes."
      ],
      [
        "Our crews and a geotechnical engineer are on site. Before any clearing can start, the engineer must check the slope above the road to make sure more rock is not ready to fall. This inspection is a key safety step and may take several hours. Please do not try to drive or walk past the barriers to see the slide.",
        "Before machines can move in, a geotechnical engineer has to inspect the rock face and decide whether it is stable. Crews have seen small pieces still falling from the top of the cut. Until the slope is judged safe, workers will stay back from the slide area. Barriers are in place at both ends, and traffic control staff are directing drivers."
      ],
      [
        "A detour is in place using the old coast road. Northbound drivers should exit at the first interchange south of the closure and follow the orange detour signs. The route is narrow and winding in places and adds roughly forty minutes to the trip. Large trucks over a set length are asked to wait rather than use the detour.",
        "Traffic is being sent along the inland route through the farming valley. Look for detour signs at the junction before the closure. The road has several sharp corners and one single-lane bridge, so please drive slowly and yield where posted. Commercial vehicles towing long trailers should plan to wait at the truck pullout until the highway reopens."
      ],
      [
        "Expect heavy traffic on the detour, especially during the morning and evening commute. Local residents along the coast road are asked to allow extra time for trips to school and work. Police will be patrolling the detour to help keep traffic moving safely. Please be patient with flaggers and keep speeds down in residential areas.",
        "Delays on the detour are likely to be long at peak times. Residents who live along the inland route should expect more traffic than usual past their homes and farm gates. School bus routes in the area are being adjusted, and families should watch for messages from the school district about pickup times."
      ],
      [
        "Once the engineer gives approval, crews will use excavators and dump trucks to remove the debris. Some large boulders may need to be broken up before they can be hauled away. Workers will also scale loose rock from the slope by hand and may install wire mesh to catch smaller pieces in the future.",
        "Clearing work will begin as soon as the slope is declared stable. Heavy equipment will remove the rock and mud from the lanes, then crews will check the road surface and guardrail for damage. A small controlled drop of loose rock from the top of the cut may be needed, which would require a short full closure of the area."
      ],
      [
        "Our current estimate is that one lane will reopen with single-lane alternating traffic by the end of the day on {date2}, if weather stays dry. Full reopening of both lanes may take longer, depending on the condition of the road and the guardrail. These times may change, and we will post updates as work continues.",
        "We expect to reopen the highway to single-lane traffic, controlled by flaggers or a temporary signal, within about two days. A full reopening depends on the engineer's final report and on whether more rain falls. Please check for updates before you travel, as the reopening time could move earlier or later."
      ],
      [
        "For current road conditions, check the provincial highway information website or call the road report line. Updates will also be shared on local radio and on our social media pages. Please do not call 911 for road information. That line must stay free for emergencies, including any new slides or crashes on the detour.",
        "Updated information will be posted on the provincial traveller website and broadcast on local radio. If you see new rock or debris on any road in the area, call 911 right away. For all other questions about the closure or the detour, please use the road information line rather than the emergency line."
      ],
      [
        "We thank drivers and residents for their patience while crews work to reopen the highway safely. Rock cuts in this area, including the slopes above the old coast road, will be monitored more closely through the rest of the rainy season, and additional inspections are being planned for other slopes along the same stretch of road.",
        "Thank you for your patience as crews work to clear the road. Safety for travellers and workers comes first. Once the highway is open again, crews will continue to watch the slope during heavy rain, and the stretch near the slide may have a lower speed limit for some time."
      ]
    ],
    "details": [
      "Closure in effect from {time} on {date} between the {city} interchange (Exit {number}) and the {city2} junction; approx. {km} of highway affected, with barriers at both ends.",
      "Detour route: exit at the interchange, follow orange \"DETOUR\" signs to the coast road, then rejoin the highway at {street} near {city2}, approx. {km} later; vehicles over 12.5 m are asked to wait at the truck pullout.",
      "Geotechnical assessment by {company} began at {time2}; engineer {p1} estimated approx. {number} cubic metres of debris, including several boulders larger than a pickup truck.",
      "Estimated reopening (single-lane alternating, flagger-controlled) is {date2} by {time2}; full two-lane reopening is targeted for {date3}, weather permitting (e.g. less than 10 mm of rain).",
      "Road information line: {phone} (24 hours); media inquiries to {p2}, Public Information Officer, at {email}; please reference closure No. {ref}.",
      "Scaling crew from {company2} will work on rope access from {time} to {time2} daily; a 20-minute \"hold\" of all traffic on the detour may be needed during controlled rock drops.",
      "School District bus routes 14 and 22 will use the inland detour starting {date2}; pickup times will be approx. {number} minutes earlier, according to the transportation office (ref. {ref2}).",
      "Original report: commercial driver {p3} called 911 at approx. {time} on {date} reporting \"rock and mud across both lanes\"; no vehicles struck and no injuries, per first responders on scene."
    ]
  },
  {
    "id": "d10-pharmacy-shoplifting",
    "kind": "report",
    "title": "Shoplifting at a pharmacy",
    "orgs": [
      "{city} Police Communications",
      "Central Island Police Dispatch"
    ],
    "senderTitles": [
      "Police Dispatcher",
      "Investigating Constable",
      "Emergency Call-Taker"
    ],
    "subjects": [
      "Theft under at pharmacy, file {ref}",
      "Shoplifting report on {street}"
    ],
    "sections": [
      [
        "At {time}, the store manager of a pharmacy on {street} called police to report that a customer had just walked out with unpaid items. According to the manager, the person filled a reusable shopping bag with razor blade cartridges and skin creams, walked past the tills without stopping, and left through the front doors. A cashier saw it happen and alerted the manager.",
        "A pharmacy cashier called 911 to report a theft in progress. The cashier said a person had been stuffing boxes of allergy medication and electric toothbrush heads into a backpack in the health aisle. When a staff member asked if the customer needed help, the person headed for the side exit and the door alarm sounded. The cashier called while watching from the window."
      ],
      [
        "The call-taker asked whether anyone was hurt or threatened. The manager said the suspect did not speak to staff or show any weapon. Store policy is not to chase or stop shoplifters, and staff followed that policy. The manager was asked to stay inside and to describe the person and which way they went.",
        "No staff were hurt, and the suspect made no threats, according to the caller. The call-taker confirmed that no employees had followed the person outside and advised them not to. The cashier was able to keep the suspect in sight through the window for a short time and continued to describe what was happening as the person crossed the parking lot."
      ],
      [
        "The suspect was described as an adult, medium build, about average height, wearing a black hooded sweatshirt with a white logo on the back, grey sweatpants and white running shoes. The person had a red reusable bag over one shoulder. The manager said the suspect had short dark hair and a medical-style face mask.",
        "The cashier described the suspect as an adult, tall and thin, wearing an olive-green rain jacket with the hood up, blue jeans and black boots. The person carried a dark blue backpack and wore a grey knit hat under the hood. The cashier said the suspect had a beard and wore wire-rimmed glasses."
      ],
      [
        "The suspect was last seen walking quickly north on {street} toward the bus loop. The manager did not see a vehicle. Patrol units in the area were given the description and direction of travel. One officer checked the bus loop and the nearby coffee shop but did not find anyone matching the description.",
        "The cashier saw the suspect get onto a bicycle parked by the bike rack and ride west through the parking lot, then turn south on {street}. The bike was described as a black mountain bike with a light on the handlebars. Officers checked the area, including the trail behind the shopping centre, without locating the suspect."
      ],
      [
        "An officer attended the pharmacy and met with the manager. A count of the shelves showed that about two dozen packages had been taken. The manager provided a list with product codes and prices. The officer also noted that the store had a similar theft two weeks earlier and asked whether the suspect looked like the same person.",
        "The responding officer took statements from the cashier and a second staff member who had seen the suspect earlier in the cosmetics aisle. Staff completed an inventory of the missing items: several boxes of allergy tablets and toothbrush heads. The officer noted the store had changed its layout recently and some higher-value items were no longer behind the counter."
      ],
      [
        "The store's security system had clear video of the suspect entering, filling the bag and leaving. The manager made a copy for the officer. Still images were taken from the video and shared with patrol members and the property crime unit, along with the description and the time of the theft.",
        "Video from the store cameras was reviewed with the officer. It showed the suspect's face briefly near the pharmacy counter where the lighting was better. The officer arranged for a copy of the footage and took a photo of a still frame for patrol members. The images will be compared with other recent thefts in the area."
      ],
      [
        "No arrest was made at the time of this report, and none of the stolen items were recovered. The file has been assigned to the property crime unit for follow-up. Staff were reminded to call police right away and not to follow suspects, and the manager agreed to report any return visits by the same person immediately.",
        "The suspect has not been identified yet. The investigating officer will check other recent pharmacy theft reports for similar descriptions or bicycles. The manager has asked the head office about moving some items back behind locked glass, and staff were reminded to call 911 while a theft is happening rather than afterward."
      ],
      [
        "This report will be updated if the suspect is identified, if new video is found, or if property is recovered. Anyone with information is asked to contact police and reference the file number. The store owner was given a victim services card with information about the court process if charges are laid.",
        "Further updates will be added if the suspect is located or charged. The manager was given the file number for insurance and for the head office. Patrol members working nights were asked to watch for anyone matching the description near the shopping centre and to check bike racks near the bus loop."
      ]
    ],
    "details": [
      "Loss list provided by manager {p1} at {time2}: approx. {number} items (e.g. razor cartridges, skin creams, allergy tablets) with a total retail value of {amount}, recorded under file {ref}.",
      "Suspect last seen at approx. {time} heading north on {street} toward the bus loop; description broadcast to Units {number} and {number2} on the \"Patrol-1\" channel.",
      "Store CCTV (cameras 2, 4 and 7) was copied to a USB drive by {p2} and logged as exhibit {ref2}; still images were forwarded to the property crime unit on {date}.",
      "Cashier {p3} (callback {phone}) reported the suspect \"stuffing a backpack\" in Aisle 9 and leaving through the side exit; the door alarm activated at approx. {time}.",
      "Similar occurrence at the same store on {date} (file {ref2}): loss of approx. {amount2}; the suspect description was comparable, but not confirmed as the same person.",
      "Bicycle description: black mountain bike, front light on handlebars, no visible decals; last seen westbound through the {company} parking lot, then southbound on {street2} at approx. {time}.",
      "The pharmacy's head office, {company}, was notified by the manager on {date2}; a request to move high-theft products back behind locked glass is under review (ticket No. {number}).",
      "Victim services pamphlet and file number provided to the store owner, {p1_title}, on {date}; follow-up by the property crime unit is scheduled for {date2} at {time2}."
    ]
  },
  {
    "id": "e01-fence-height-bylaw",
    "kind": "letter",
    "title": "Bylaw notice for an unpermitted fence over the height limit",
    "orgs": [
      "City of {city} Bylaw Services",
      "{city} Community Standards Department"
    ],
    "senderTitles": [
      "Bylaw Compliance Officer",
      "Senior Bylaw Officer",
      "Community Standards Inspector"
    ],
    "subjects": [
      "Fence height contravention at {street}",
      "Bylaw file {ref}: fence over height limit"
    ],
    "sections": [
      [
        "This letter concerns the new fence along the side and rear property lines at {street}. Our office received a written complaint about the structure, and an officer visited the area on {date} to look at it from the public sidewalk and the lane. Based on that visit, the fence appears to break the zoning rules for height, and no permit was issued for it.",
        "Following a routine patrol of your neighbourhood, our office opened a file on the fence recently built at {street}. The officer who walked the back lane noted that the panels are noticeably taller than those on the neighbouring lots. When we checked our records afterward, we could not find a building or fence permit connected to the property for this work."
      ],
      [
        "Under the zoning bylaw, a fence in a rear or side yard may not be taller than 1.8 metres, measured from the finished ground on the lower side. Where a fence sits in front of the house, the limit drops to 1.2 metres so that drivers backing out of driveways can still see children and cyclists on the sidewalk.",
        "The rules on fence height exist for practical reasons. Tall solid fences can block sunlight from a neighbour's garden, trap snow against a shared wall, and hide the view of a lane or sidewalk from a driveway. For that reason, residential fences in your zone are capped at 1.8 metres in back and side yards and 1.2 metres in front yards."
      ],
      [
        "Our officer measured several points along the run of cedar boards from the lane side. The tallest section, near the garage, stood at roughly 2.4 metres, and most of the panels were well over the limit. A lattice topper has also been added along the top, which counts toward the total height under the bylaw even though it lets some light through.",
        "Measurements were taken from the public lane using a tape and a level. Most of the fence came in at about 2.2 metres, and one corner post with a decorative cap reached higher still. The officer also noted that the soil along the base had been built up with a planter bed, which can change how height is measured on a sloped lot."
      ],
      [
        "To resolve this, you have two choices. You can lower the fence so every part of it, including any topper, is at or below the permitted height. Or, if you believe a taller fence is truly needed, you can apply to the Board of Variance for permission to keep it, though approval is not guaranteed and the board does consider neighbour input.",
        "There are two ways forward. The simplest is to cut the panels and posts down to the allowed height, which many owners do in a weekend with a circular saw. The other is to apply for a development variance, which involves a fee, a sketch of the fence, and notice to nearby owners before a decision is made."
      ],
      [
        "Please bring the fence into compliance by {date2}. After that date, an officer will return to measure it again. If the work has not been done and no variance application is on file, the city may issue a ticket and can, in some cases, arrange for the work to be completed and add the cost to the property taxes.",
        "We ask that the fence be lowered, or a variance application submitted, no later than {date2}. A follow-up inspection will be booked shortly after. Where a property stays out of compliance, the bylaw allows for fines of {amount} per offence, and repeated tickets can be issued for each day the contravention continues."
      ],
      [
        "If you think our measurements are wrong, we want to hear about it. Sometimes a survey shows that the ground level is different from what it looks like from the lane, or a fence actually sits on a neighbour's land. If you have a recent survey certificate or photos taken during construction, please send copies and we will review them before the deadline.",
        "You are welcome to dispute these findings. If the fence was built before the current bylaw came into force, it may be allowed to stay as a legal non-conforming structure. Old photos, a building receipt, or a statement from the contractor who installed it can help show its age, and the officer will review anything you provide."
      ],
      [
        "Please keep in mind that this letter is not a fine. Most fence files are closed without any penalty once the owner makes the change. Our aim is simply to have the fence meet the same rules that apply to every home in the neighbourhood, and we are happy to explain how the height is measured on your particular lot.",
        "We understand that fences are often built for privacy, to keep a dog in the yard, or to block a busy lane. If privacy is the main concern, a hedge or freestanding planter screen set back from the property line may be allowed at a greater height, and staff at the permit counter can explain the options."
      ],
      [
        "If you have questions, or would like the officer to meet you on site to go over the measurements together, please call {phone} and quote file {ref}. Office hours are weekdays from 8:30 a.m. to 4:30 p.m. Thank you for your cooperation in resolving this matter before the deadline, and for helping keep the neighbourhood safe and pleasant.",
        "For questions about this file, you can reach me directly at {phone} or by email at {email}. Please include file {ref} in any message so it reaches the right officer, and mention a few times when you are usually home. We appreciate your prompt attention and look forward to closing this file without any further action."
      ]
    ],
    "details": [
      "Site visit log for file {ref}: officer {p1} attended {street} on {date} at {time}; fence measured at approx. 2.3 m (lane side) and 2.1 m (yard side), with a 0.3 m lattice topper included.",
      "Per Zoning Bylaw No. 3150, s. 6.4(b), as applied to {street}, \"fence height\" means the distance from finished grade on the lower side to the top of the highest board, post cap or screening element (see sketch {ref2}, page {number}).",
      "A Board of Variance application (Form BV-2) requires a fee of {amount}, a dimensioned sketch, and written comments from adjacent owners; the next hearing is scheduled for {date3} at City Hall, {city}.",
      "The complainant, a resident of {street2}, is not identified under the Freedom of Information and Protection of Privacy Act (FOIPPA); please direct any concerns to {p2} at {phone} rather than contacting neighbours.",
      "If the work is not done by {date2}, the City of {city} may issue a Municipal Ticket Information (MTI) of {amount2} per day and, under s. 17 of the Community Charter, recover remedial costs through property taxes.",
      "Photos taken by officer {p2_last} (No. 4 to No. 11, timestamped {time2}) show the fence running approx. {number} m along the north line of {street}, including the gate beside the detached garage.",
      "Contractors such as {company} have quoted approx. {amount} to cut cedar panels to 1.8 m; however, any post re-setting near the gas line requires a BC 1 Call locate at least {number2} business days ahead.",
      "Questions about survey pins, grade changes or the \"non-conforming\" status should go to {p3}, Planning Technician, at {phone} (ext. 2214), quoting both file {ref} and roll No. {ref2}."
    ]
  },
  {
    "id": "e02-property-tax-notice",
    "kind": "notice",
    "title": "Property tax notice and home owner grant reminder",
    "orgs": [
      "City of {city} Finance Department",
      "District of {city} Revenue Services"
    ],
    "senderTitles": [
      "Manager of Revenue Services",
      "Tax Collector",
      "Deputy Director of Finance"
    ],
    "subjects": [
      "Property taxes due {date2}",
      "Annual tax notices and home owner grant"
    ],
    "sections": [
      [
        "Property tax notices for this year have now been mailed to every owner in the municipality. If you have signed up for e-billing, your notice was sent by email instead of on paper. Please read it carefully, since it shows your assessed value, the taxes owing, and the date payment is due. Missing the due date means a penalty is added automatically.",
        "This year's property tax notices went into the mail on {date}. Owners who registered for electronic notices should find theirs in their inbox. Each notice lists the roll number, the assessed value of the land and buildings, and a breakdown of what goes to the city, the school system, the regional district and the hospital district."
      ],
      [
        "The total on your notice pays for many services people use every day. It covers road repairs, snow clearing, the fire department, parks and playgrounds, the public library, and the transit system. A share also goes to the province for schools and to the regional hospital district, which the city collects on their behalf and passes along.",
        "Council adopted the tax rates in May after a public budget process that included open houses and an online survey. This year's overall increase reflects higher costs for fuel, insurance and policing, along with the second phase of a plan to replace aging water mains in older neighbourhoods. Your notice shows exactly how much goes to each service."
      ],
      [
        "If you live in your home as your main residence, you may be able to reduce your bill by claiming the home owner grant. The basic grant lowers the school tax on most homes, and a larger amount is available to owners aged 65 or older, owners with a disability, and some veterans. The grant is not applied unless you claim it each year.",
        "Please remember to claim your home owner grant. Many residents assume it happens automatically, but it must be applied for every year, and only by the registered owner who lives in the home. Seniors, people with a disability and certain veterans qualify for an additional amount, and a separate supplement may help families with low income."
      ],
      [
        "Grant applications are now made through the province's online service rather than at City Hall. You will need your roll number and jurisdiction code, both printed on the front of your tax notice. The application takes about five minutes. If you do not have internet access, a staff member at the front counter can help you by phone or in person.",
        "To apply, visit the provincial home owner grant website or call their toll-free line. Have your tax notice nearby because you will be asked for the roll number and the name of every owner on title. Once you submit it, you will receive a confirmation number, which is worth writing down in case there is any question later."
      ],
      [
        "There are several ways to pay. Most banks let you add the city as a payee through online banking, using your roll number as the account number. You can also mail a cheque, drop one in the slot beside the front doors at City Hall, or pay at the counter with debit. Credit card payments are accepted through a third party for a fee.",
        "Payment can be made through your bank's website or app, by cheque in the mail, or in person at City Hall with cash or debit. Please allow a few business days for online payments to reach us, as the date we receive the money is what counts, not the date you pressed send. Post-dated cheques are welcome if dated on or before the deadline."
      ],
      [
        "Both payment and the grant claim must be completed by {date2} to avoid a penalty. On the day after the due date, a penalty of ten percent is added to any unpaid current taxes, including the amount of an unclaimed grant. The penalty cannot be waived, even if your payment was late because of a bank delay or the mail.",
        "Please note the deadline of {date2}. Any balance remaining after that date, including the value of an unclaimed grant, will have a penalty added the next morning. Staff are not able to remove penalties once they are applied, so we strongly suggest paying a few days early, especially if you plan to mail a cheque."
      ],
      [
        "If paying a large bill once a year is difficult, consider joining our monthly pre-authorized payment plan. Payments are taken from your bank account on the first of each month and are applied toward next year's taxes. Owners aged 55 or older may also qualify for the provincial tax deferment program, which lets eligible owners defer taxes with a low interest rate.",
        "Some owners find it easier to spread taxes across the year. Our pre-payment plan withdraws a fixed amount each month, and interest is paid on the balance. Separately, the province offers a property tax deferment program for seniors and for families with children under 18, which works like a low-interest loan secured against the home."
      ],
      [
        "If you think your notice has an error, such as the wrong mailing address or an owner who has passed away, please contact the tax office at {phone}. Questions about your assessed value should go to BC Assessment, since the city does not set property values. Thank you for your prompt payment.",
        "Our tax office is open weekdays from 8:30 a.m. to 4:30 p.m. and can be reached at {phone} or {email}. Lineups are longest during the final week before the deadline, so we encourage you to call or visit early. Thank you to all residents for supporting the services that keep {city} running."
      ]
    ],
    "details": [
      "Folio No. {ref} at {street}: assessed value {amount}; gross taxes {amount2}; basic grant claimed (Y/N): N; jurisdiction code 234, neighbourhood \"Uplands-East,\" mailing date {date}.",
      "The additional grant applies to owners at {street} or elsewhere who are 65 or older by December 31, a \"person with disabilities\" under the Home Owner Grant Act, or a qualifying veteran; contact {p2} at {phone} for the checklist.",
      "Cheques should be payable to the City of {city}, with the roll number written on the front; mail to Revenue Services, {street2}, and allow approx. {number} business days for Canada Post delivery.",
      "A 10% penalty is applied at 12:01 a.m. on the day after {date2}; for example, an unpaid balance of {amount} becomes {amount2} plus interest, calculated at the provincial rate set each quarter.",
      "Online grant claims made after {date2} are accepted until {date3} but are subject to penalty; owners who need help may book a call with {p1} (Revenue Clerk) at {phone}, ext. 3102.",
      "Pre-authorized payment plan enrolment (Form TX-PAP) must be received by {date3} with a void cheque; withdrawals of approx. {amount2} on the 1st of each month earn interest at prime minus {percent}.",
      "Under the Land Title Act, a \"registered owner\" is the person shown on title at the time of the claim; buyers of {street2} whose transfer registered after {date} should keep the contract (e.g. file {ref2}).",
      "Hours over the deadline week: Monday to Friday, {time} to {time2}; an after-hours drop box sits beside the east doors at {street}, emptied each morning at 8:00 a.m. by staff."
    ]
  },
  {
    "id": "e03-building-permit-incomplete",
    "kind": "letter",
    "title": "Building permit application missing drawings and engineer's letter",
    "orgs": [
      "City of {city} Building Inspection Division",
      "{city} Development Services"
    ],
    "senderTitles": [
      "Plans Examiner",
      "Building Permit Coordinator",
      "Senior Building Official"
    ],
    "subjects": [
      "Permit application {ref}: items required",
      "Incomplete application for {street}"
    ],
    "sections": [
      [
        "Thank you for submitting a building permit application for the addition and covered deck at {street}. We received your package on {date} and a plans examiner has completed the first review. Unfortunately, the application is not yet complete, so it cannot be placed in the queue for full plan checking until the missing items listed below are provided.",
        "Our office has started reviewing the permit application you filed for the garage conversion and second-storey suite at {street}. Before an examiner can check the design against the building code, every required document must be on file. A few important pieces are still missing, and this letter explains what they are and how to send them in."
      ],
      [
        "The first gap is in the drawings. We received a site plan and floor plans, but there are no building elevations or cross-sections. Elevations show what each side of the building will look like, including window sizes and roof height. A cross-section cuts through the structure and shows the footings, wall assembly, insulation, and how the roof framing is supported.",
        "The drawing set is not complete. The floor plans are clear, but the package has no foundation plan and no section drawing showing how the new floor ties into the existing house. We also need the elevations to show the height of the building from average grade, since the zoning rules limit how tall an accessory building can be."
      ],
      [
        "Second, because the plans show a beam spanning the new opening between the kitchen and the addition, we require a letter from a professional engineer registered in British Columbia. The letter should confirm that the beam, posts and footings have been designed to carry the loads, including snow load on the roof above. A sealed beam calculation sheet can be attached.",
        "We also need a letter of assurance from a structural engineer. The drawings show a retaining wall more than 1.2 metres tall along the driveway and a new bearing wall in the basement. Both require engineering. The engineer must be registered with the provincial association and will need to stamp the related drawings and sign the standard schedule forms."
      ],
      [
        "We know these requests can feel frustrating, especially if you hired a designer who believed the package was complete. In our experience, the most common missing items are exactly these: elevations, sections and engineering. Getting them right at the start usually saves weeks later, because examiners can then finish their review in one pass instead of several.",
        "Please do not be discouraged by this list. Many first-time applicants receive a similar letter, and it does not mean anything is wrong with your design. It only means we cannot check it yet. Once the full set is in, the examiner will look at fire separation, stairs, ventilation, and energy requirements, and may send a short list of questions."
      ],
      [
        "You can upload the missing documents through the online permit portal by logging in and choosing your application from the list. Please send drawings as PDF files at a readable scale, with each sheet labelled and dated. If you prefer, two paper sets may be dropped off at the front counter, along with a copy of this letter so staff can match them.",
        "The easiest way to send revised drawings is through our online portal, under the tab marked Additional Documents. Please replace the whole drawing set rather than sending single sheets, so the examiner is always working from one current version. Large paper sets are still accepted at City Hall, though they may take a few extra days to scan in."
      ],
      [
        "Applications that stay incomplete for 90 days are closed, and the part of the fee that covers review is not refunded. Your file will remain open until {date2}. If you need more time because your engineer is booked up, please let us know in writing before that date, and an extension of up to 60 days can usually be granted.",
        "Please note that an application cannot sit open forever. If we have not received the missing items by {date2}, the file will be cancelled and you would need to apply again with a new fee. If your consultants need extra time, send us a short email explaining the delay and we will consider a one-time extension."
      ],
      [
        "No construction work may start until a permit has been issued and posted on site. This includes digging footings, removing bearing walls, or pouring concrete. Starting early can lead to a stop-work order and a doubled permit fee. Minor site preparation, such as moving garden beds or taking down an old shed, is usually fine, but please ask first.",
        "While you wait, please hold off on any structural work. Inspectors cannot approve footings or framing that were covered up before a permit existed, and opening finished walls later is costly. If your contractor is eager to begin, they are welcome to call the office to confirm which small tasks can safely go ahead in the meantime."
      ],
      [
        "If you would like to talk through these comments, I am available by phone at {phone} on weekday mornings. You may also book a short meeting at the permit counter. Please have your application number, {ref}, ready when you call so I can open the file right away and answer your questions about the drawings.",
        "Questions about this letter can be sent to me at {email} or by phone at {phone}. Your designer or engineer is welcome to contact me directly as well, which often speeds things up. Please quote permit application {ref} in all correspondence. We look forward to receiving the complete package and moving your project ahead."
      ]
    ],
    "details": [
      "Items outstanding on application {ref} for {street}: (1) north, south, east and west elevations; (2) Section A-A at 1:50; (3) foundation plan; (4) Schedule B signed by the engineer of record, as noted by {p1} on {date}.",
      "The engineer's letter for {street} must reference the 2024 BC Building Code, Part 4 or Part 9 as applicable, include the PEng seal and EGBC permit-to-practise No. {ref2}, and confirm a design snow load of approx. {number} kPa for {city}.",
      "Review fees paid on {date}: {amount} (non-refundable plan-check portion) plus a {amount2} damage deposit held against curb, sidewalk and boulevard repairs along the {street} frontage.",
      "Per Building Bylaw No. 2290, s. 9.3, an application that remains \"incomplete\" for 90 days is deemed abandoned; file {ref} closes on {date2} unless an extension request is received by {p2} in writing.",
      "Drawings uploaded to the portal should use the naming format \"{ref}_A101_RevB.pdf\"; files over 25 MB or scanned below 200 dpi will be returned by the intake clerk, {p3_first}, within {number} business days.",
      "The retaining wall along the east side of {street} (approx. {number} m tall, cast-in-place concrete) requires geotechnical comment, e.g. a letter from {company} confirming bearing capacity and drainage behind the wall.",
      "Your designer, {p1}, may call the plans examiner at {phone}, ext. 4417, between 8:30 a.m. and 12:00 p.m.; afternoon calls are returned the next business day, ideally before {date3}.",
      "Work started without a permit attracts a fee surcharge of 100% under s. 12.1; for {street} that would mean approx. {amount2} in extra fees, and inspector {p2_last} would issue a stop-work order."
    ]
  },
  {
    "id": "e04-strata-council-minutes",
    "kind": "report",
    "title": "Strata council meeting minutes on roof repairs, special levy and parking",
    "orgs": [
      "The Owners, Strata Plan VIS{number2} ({city})",
      "Harbourview Terrace Strata Corporation"
    ],
    "senderTitles": [
      "Strata Council Secretary",
      "Recording Secretary",
      "Strata Manager"
    ],
    "subjects": [
      "Council meeting minutes, {date}",
      "Minutes: roof, levy and parking"
    ],
    "sections": [
      [
        "The regular meeting of the strata council was called to order at {time} in the amenity room, with five of seven council members present, so quorum was confirmed. The property manager attended as a non-voting guest, and two owners sat in as observers. The minutes from the previous meeting were adopted as circulated after one small correction to the spelling of a contractor's name.",
        "Council met on {date} in the ground-floor meeting room. The president, {p1}, chaired the meeting and confirmed that quorum was present. Three owners attended to observe, and one asked to speak about parking under new business, which council agreed to allow. The agenda was approved with the addition of an item on the garbage room door, which had been jamming."
      ],
      [
        "The first major item was the roof. The roofing consultant's report, sent to council the week before, found that the membrane over the north building is at the end of its life. Several seams have lifted, and water staining was found in two top-floor units and in the attic above the east stairwell. The consultant recommended full replacement rather than patching.",
        "Council reviewed the roof inspection completed after the heavy rains in the fall. The inspector reported soft spots near the rooftop vents, worn flashing around the elevator housing, and clogged drains on the lower roof. Owners in two upper units had reported drips during storms. The inspector noted that spot repairs had been made three times in four years and were no longer holding."
      ],
      [
        "Council discussed three quotes for the roof work. The lowest price did not include new insulation or a warranty on labour, so members agreed it was not a fair comparison. After discussion, council voted to recommend the middle quote, from {company}, which includes a fifteen-year warranty and tapered insulation to improve drainage. The vote passed four to one.",
        "Two roofing firms submitted quotes, and a third declined to bid because of its schedule. Members compared the scope, start dates and warranties. One councillor raised concerns about noise for owners who work from home, and it was agreed that the contractor would be asked to avoid starting before 8:00 a.m. Council agreed to move forward with the more complete proposal."
      ],
      [
        "Because the contingency reserve fund does not hold enough to cover the full cost, council agreed to propose a special levy. The levy would be split among owners by unit entitlement, which means larger units pay a larger share. The proposal will be presented at a special general meeting and requires a three-quarter vote of owners present to pass.",
        "The treasurer reported that the reserve fund could cover only part of the roof project without dropping below the level recommended in the depreciation report. Council therefore resolved to call a special general meeting to ask owners to approve a special levy of {amount}, divided by unit entitlement, with payment due in two instalments."
      ],
      [
        "Under new business, the owner of one unit spoke about repeated problems with a neighbour parking in the visitor stalls overnight. The owner said a vehicle had occupied the same visitor stall for most of the past month. Council reminded everyone that visitor parking is limited to 48 hours, and the manager was asked to confirm the plate and send a written warning.",
        "Parking was discussed at length. Council received four written complaints about residents using visitor stalls for second vehicles and about a camper van parked in a regular stall that extends into the drive aisle. One owner reported a scraped bumper while backing out. Council agreed that the current bylaw is clear but has not been enforced consistently."
      ],
      [
        "Council voted to begin consistent enforcement of the parking bylaw starting the following month. A notice will be posted in the lobby and the parkade, and each owner will receive a copy by email. After one written warning, vehicles in breach may be towed at the owner's cost. Council noted that bylaw fines cannot be imposed without first giving the owner a chance to respond.",
        "After discussion, council directed the manager to send letters to the owners involved, giving each a chance to respond in writing or at the next meeting, as the Strata Property Act requires. Council also asked the manager to price new signage for the visitor area and a parking permit system using hang tags, to be reported back next month."
      ],
      [
        "Under other business, the garbage room door has been repaired by adjusting the closer, and the lobby carpet cleaning was completed. The manager reported that the insurance renewal came in higher than last year, mostly because of claims across the industry. Council asked for a breakdown of the premium to share with owners at the next annual general meeting.",
        "Other items were brief. The landscaping contract was renewed for another year on the same terms. An owner's request to install a heat pump on a balcony was approved, subject to an electrician's letter and noise limits. The manager confirmed that the fire alarm and sprinkler inspection is booked, and notices will go out ahead of time."
      ],
      [
        "There being no further business, the meeting was adjourned at {time2}. The next council meeting is planned for {date2}, and the special general meeting on the roof levy is expected shortly after, once the required notice period has passed. Owners with questions about these minutes were invited to contact the strata manager.",
        "With no further items, the president thanked members and observers for attending, and the meeting adjourned at {time2}. The next regular meeting will take place on {date2} in the same room. The draft notice for the special general meeting will be reviewed by email before it is sent to all owners."
      ]
    ],
    "details": [
      "Present: {p1} (President), {p2} (Treasurer), {p3} (Secretary) and two members-at-large; regrets: one member (travelling); also present: property manager from {company}, as a non-voting guest.",
      "Roof quotes received: {company} at {amount}, including a 15-yr labour warranty; {company2} at {amount2}, excluding insulation and drains; a third firm declined to bid citing workload.",
      "MOTION (moved {p2_last}, seconded {p3_last}): \"To present a 3/4 vote resolution for a special levy of {amount} at an SGM on {date3}.\" CARRIED, 4 in favour, 1 opposed, 0 abstaining.",
      "Visitor stall V-3 was reported occupied by a grey pickup (plate partially recorded) on approx. {number} nights between {date} and {date2}; the manager will verify against the resident vehicle registry.",
      "Per Bylaw 38(4), \"visitor parking\" is limited to 48 consecutive hours; vehicles in breach after one written warning from {p3_last} may be towed by {company2} at the owner's expense (approx. {amount2} per tow).",
      "The CRF balance as of {date} was reported at {amount}, versus a depreciation-report target of {amount2}; the treasurer cautioned against drawing it down by more than {percent} in a single year.",
      "Insurance renewal: premium rose {percent} to {amount}; the deductible for water damage is now {amount2}, and owners are reminded to confirm their own policies cover deductible assessments.",
      "Action items: manager to draft SGM notice by {date2}; {p3_last} to post parking notice in lobby and P1 parkade; {p1_first} to request a schedule from {company} for the roof replacement."
    ]
  },
  {
    "id": "e05-clinic-relocation",
    "kind": "notice",
    "title": "Medical clinic moving to a new location",
    "orgs": [
      "{city} Family Medical Clinic",
      "Seaside Primary Care Centre"
    ],
    "senderTitles": [
      "Clinic Manager",
      "Medical Office Administrator",
      "Patient Services Lead"
    ],
    "subjects": [
      "Our clinic is moving on {date2}",
      "New location for {org}"
    ],
    "sections": [
      [
        "We are pleased to let our patients know that the clinic is moving to a larger space. After nearly twenty years in our current building, we have outgrown the small waiting room and the narrow hallway that made it hard for wheelchairs and strollers to pass. The new location offers more exam rooms, an accessible entrance, and free parking right outside the door.",
        "The clinic will soon be moving to a new home at {street}. Many of you have told us how hard it is to find parking at our current spot, and how crowded the waiting room becomes on Monday mornings. The new building solves both problems, and it sits on a main bus route with a stop only a short walk from the entrance."
      ],
      [
        "Our last day at the old address will be {date}. The clinic will be closed for two business days while furniture, computers and medical equipment are moved and set up. We will reopen at the new location on {date2}. During the closure, please go to a walk-in clinic or urgent care centre for anything that cannot wait, or call 8-1-1 for advice.",
        "We will see our final patients at the current location on {date} and open the doors of the new clinic on {date2}. There will be a short closure in between while our movers and technicians take apart and reinstall the equipment. If you become unwell during those days, the HealthLink BC nurse line at 8-1-1 is available around the clock."
      ],
      [
        "If you already have an appointment booked after the move, you do not need to do anything. Your appointment will take place at the same date and time, only at the new address. Our staff will also call or text everyone with an upcoming visit to remind them. Please double-check where you are going before you leave home, especially in the first few weeks.",
        "Existing appointments will not change. Whether you are seeing your doctor, the nurse practitioner, or our clinic nurse for a dressing change or an injection, the visit will simply happen at the new building. Reminder texts sent from our booking system will show the updated address. If you have a ride booked through a volunteer driver program, please let them know."
      ],
      [
        "Your medical records are moving with us and will stay completely confidential. Our records are kept in a secure electronic system, so no paper charts will travel in the moving truck. Lab results, imaging reports and specialist letters will continue to come to the clinic as usual. Pharmacies and specialists will be told about our new address and fax number.",
        "Please be assured that your health records are safe. Everything is stored electronically on secure servers, and none of your personal information will be handled by the movers. Your doctor will still be able to see past visits, test results and prescriptions on the first day we reopen. Any old paper files have already been scanned and stored according to privacy law."
      ],
      [
        "Our phone number will change with the move. The new main number is {phone}. For a few months, calls to the old number will be forwarded automatically, but we encourage you to update your contacts now. The fax number for pharmacies and other offices is also changing, and our staff will share it with any provider who asks.",
        "When we move, the clinic will get a new phone system with more lines, which should mean shorter waits on hold in the morning. Our new number is {phone}. The old number will play a short recorded message giving the new number for about three months, and then it will be disconnected. Prescription renewal requests can still be sent by your pharmacy."
      ],
      [
        "The new clinic is on the ground floor, with automatic doors, a lowered reception desk, and an accessible washroom off the waiting area. There is a covered bike rack beside the entrance and two parking stalls marked for people with disability permits. The lab collection site in the same building means many patients will be able to give blood samples right after their visit.",
        "Inside the new space you will find a bright waiting area with separate seating for patients with cold and flu symptoms. Each exam room has a height-adjustable table, which makes visits easier for older patients and anyone with mobility challenges. A pharmacy is located next door, so you can fill a prescription on the way out without driving across town."
      ],
      [
        "We ask for your patience during the first week at the new location. Our staff will be learning a new layout and may take a little longer to check patients in. Please arrive five or ten minutes early for your first visit, and let the front desk know if you need help finding your way to the exam rooms or washrooms.",
        "Moving a busy clinic is a big job, and a few small hiccups are likely. Phones may be busier than usual, and some appointment times could shift slightly. If you have a non-urgent question, such as how to request a form or a sick note, our website will be the fastest way to find an answer during the first week."
      ],
      [
        "Thank you to every patient who has shown kindness and patience to our team over the years. We are excited to welcome you to a space that is easier to reach and more comfortable to wait in. If you have questions about the move, please call us at {phone} or ask any of our staff at your next visit.",
        "Our doctors, nurses and front desk staff are looking forward to seeing you in the new clinic. If you have any concerns, including questions about getting there by transit or by HandyDART, please speak with reception or email us at {email}. We appreciate your loyalty and look forward to caring for you and your family in our new home."
      ]
    ],
    "details": [
      "New address: {street}, Unit 102 (ground floor, east entrance), {city}; the lab collection site is in Unit 104, open {time} to {time2} on weekdays, with no appointment needed for routine draws.",
      "Clinic closure: {date} (from 2:00 p.m.) through the following day; reopening {date2} at 8:30 a.m. with Dr. {p1_last}, Dr. {p2_last} and nurse practitioner {p3} all seeing patients.",
      "Old line (250-555-0142) forwards to {phone} until {date3}; the new fax for pharmacies is 250-555-0190, and Dr. {p1_last}'s MSP billing No. and practitioner IDs remain unchanged.",
      "Records are held in the clinic's EMR (\"MedAccess\") on Canadian servers; under PIPA and College standards, no paper charts will leave {street2} in the truck, confirms privacy officer {p2} ({email}).",
      "Transit riders can take Route {number} to the \"Hospital Way\" stop, approx. 150 m from {street}; HandyDART users should update their pickup address with dispatch before {date2}.",
      "Patients with standing injections (e.g. B12, Depo-Provera) booked between {date} and {date2} will be called by {p3_first} to reschedule; please return calls promptly so doses are not missed.",
      "Movers from {company} will relocate approx. {number2} exam tables, 2 ECG machines and the vaccine fridge, which must stay between 2 and 8 degrees C; a back-up fridge has been rented from {company2}.",
      "Forms and sick notes (e.g. WorkSafeBC, ICBC, insurance) requested between {date} and {date2} will be ready within {number} business days; a fee of {amount} applies to non-insured forms."
    ]
  },
  {
    "id": "e06-immunization-clinics",
    "kind": "notice",
    "title": "Community flu and COVID immunization clinic schedule",
    "orgs": [
      "{city} Public Health Unit",
      "Island Community Immunization Program"
    ],
    "senderTitles": [
      "Public Health Nurse Manager",
      "Immunization Program Coordinator",
      "Community Health Supervisor"
    ],
    "subjects": [
      "Fall immunization clinics now open",
      "Flu and COVID shots: book now"
    ],
    "sections": [
      [
        "Fall immunization clinics for influenza and COVID-19 will begin on {date}. Both vaccines are free for everyone six months of age and older who lives in the province. Getting immunized each fall is one of the simplest ways to protect yourself and the people around you, especially babies, older adults, and anyone with a long-term health condition.",
        "Respiratory illness season is coming, and public health nurses are getting ready to offer this year's flu and COVID-19 vaccines. Clinics will run in community halls, recreation centres and schools across the region starting {date}. The vaccines are updated each year to match the strains expected to circulate, so last year's shot does not protect you this winter."
      ],
      [
        "This year, most people can receive both vaccines at the same visit, one in each arm. Doing them together saves a trip and does not make either one less effective. Children under nine who have never had a flu shot will need two doses about four weeks apart, and the nurse will book the second dose before you leave.",
        "You can choose to get your flu shot and COVID-19 vaccine at the same appointment. Nurses will give one in each arm, and the visit usually takes about fifteen minutes in total. For young children, a nasal spray flu vaccine is available as an alternative to a needle, which many parents find makes the visit much easier."
      ],
      [
        "Clinics will run on weekday afternoons and Saturday mornings at the {city} Recreation Centre, with extra evening sessions in the second week. A smaller clinic will also be held at the library branch in the north end for people who cannot easily travel downtown. The full schedule, with dates, times and locations, is posted on the health authority website.",
        "The main clinic will be held in the gymnasium at {street}, with the entrance at the side doors facing the parking lot. Evening clinics are being offered on Tuesdays and Thursdays for people who work during the day. Pop-up clinics will also visit rural community halls, and a public health nurse will attend the seniors' centre on two Friday mornings."
      ],
      [
        "Appointments are strongly encouraged and can be booked online or by phone. When booking, you will need a personal health number for each person, along with a date of birth and an email or cell number for the confirmation. You can book a whole family together in one time slot, which is helpful for parents bringing several children.",
        "To keep wait times short, please book ahead. The online booking system opens one week before the first clinic and lets you choose a location and time. If you would rather speak to someone, the call centre can book for you. A small number of drop-in spaces are held each day, but they fill quickly in the first two weeks."
      ],
      [
        "On the day of your appointment, wear a short-sleeved shirt or a top that lets the nurse reach your upper arm easily. Bring your health card and a list of any medications. Please eat something beforehand, since people who skip a meal are more likely to feel faint. If you are feeling unwell with a fever, please reschedule.",
        "Please arrive no more than five minutes before your booked time to keep the waiting area from getting crowded. A nurse will ask a few health questions before giving the vaccine, so let them know about any allergies or past reactions. After your shot, you will be asked to wait for fifteen minutes in the observation area before leaving."
      ],
      [
        "Most side effects are mild and go away within a day or two. A sore arm, tiredness, or a slight fever are the most common. Serious reactions are very rare, and nurses at every clinic are trained and equipped to respond right away. If you have had a severe allergic reaction to a vaccine in the past, please speak to a nurse first.",
        "It is normal to have a sore or red arm for a day or so after the vaccine. Some people feel achy or tired, much like the start of a mild cold, but this is the immune system responding and usually passes quickly. A cool cloth on the arm and plenty of fluids can help. Contact a doctor if symptoms last longer."
      ],
      [
        "If you cannot attend a public health clinic, many local pharmacies also give flu and COVID-19 vaccines to anyone aged four and older. Pharmacists use the same booking system, so you can compare times. People who are homebound because of illness or disability can request a home visit by a nurse, and these are arranged by phone.",
        "For people who find it hard to get to a clinic, there are other options. Most pharmacies in town offer the vaccines, often with Saturday hours. Residents in long-term care will be immunized where they live. Anyone who is housebound or caring for someone who is can call the program line to arrange a nurse home visit."
      ],
      [
        "Thank you for helping keep our community healthy this season. For more information about the vaccines, eligibility, or clinic times, please call the booking line at {phone} or visit the health authority website. Interpreters are available on request in many languages, and nurses are always happy to answer questions before you decide.",
        "Every immunization helps reduce the number of people who become very sick and need hospital care. If you have questions about whether a vaccine is right for you, a public health nurse can talk it through with you. Call {phone}, weekdays from 8:30 a.m. to 4:30 p.m., or ask your family doctor at your next visit."
      ]
    ],
    "details": [
      "Clinic schedule: {city} Recreation Centre, {street}, Mon to Fri from {time} to {time2}; Saturdays 9:00 a.m. to noon starting {date}; last scheduled clinic {date3} (Gym B, side entrance).",
      "Eligibility: all residents aged 6 months+ with a valid PHN; out-of-province students and seasonal workers in {city2} may be immunized at no cost by calling {phone} and quoting program code {ref}.",
      "Products this season include a standard-dose flu vaccine, a high-dose version for adults 65+, \"FluMist\" (nasal spray, ages 2 to 17), and the updated COVID-19 vaccine; nurse {p1} confirms approx. {bignumber} doses arrived on {date}.",
      "Approx. {bignumber} doses have been allocated to the North Island zone for the first wave; nurse lead {p2} expects drop-in capacity of roughly {number} people per session at {city2} halls.",
      "Anyone with a history of anaphylaxis, Guillain-Barre syndrome within 6 weeks of a past flu shot, or a bleeding disorder should consult {p3} at {phone} before booking at {street2}.",
      "Pharmacies offering the vaccine, e.g. those in the {city} Shopping Centre and on {street2}, use the same booking system; pharmacists vaccinate ages 4+ only, so younger children must attend {street} by {date3}.",
      "Homebound clients may request a visit by calling {phone} (ext. {number}); visits are scheduled by zone between {date} and {date2}, with a nurse and an assistant attending together.",
      "Interpreters (e.g. Punjabi, Mandarin, Tagalog, ASL) can be booked at least {number} days ahead through {phone}; please mention the clinic date and the client's name, e.g. \"{p1}\"."
    ]
  },
  {
    "id": "e07-school-bus-routes",
    "kind": "notice",
    "title": "New school bus routes and pickup times",
    "orgs": [
      "School District No. {number2} ({city})",
      "{city} and Area School District Transportation"
    ],
    "senderTitles": [
      "Transportation Manager",
      "Director of Operations",
      "Student Transportation Coordinator"
    ],
    "subjects": [
      "New bus routes begin {date2}",
      "School bus route and pickup changes"
    ],
    "sections": [
      [
        "The school district is making changes to several bus routes, starting {date2}. Over the past year, enrolment has grown quickly in the new subdivisions on the east side, while some rural routes now carry only a handful of students. To make better use of our buses and drivers, routes have been redrawn and some pickup times have moved earlier or later.",
        "Families with children who ride the school bus should be aware that new routes and pickup times take effect on {date2}. The changes follow a review of ridership, travel times and road safety that began last spring. Our goal was to shorten the longest rides, add stops where neighbourhoods have grown, and remove stops that no longer have any regular riders."
      ],
      [
        "The biggest change affects elementary students in the north end. Two former routes have been combined, which means a single bus will now serve both areas, and the first pickup is about fifteen minutes earlier than before. Students on the secondary route along the highway will see only small time changes of a few minutes in either direction.",
        "Several routes now have new numbers, and a few stops have been moved to safer locations. For example, a stop that once sat on a busy curve with no shoulder has been shifted to a nearby side road where children can wait well back from traffic. Some pickup times now start a little later because the new routes are shorter."
      ],
      [
        "Every registered rider's family will receive an email with their child's route number, stop location, and pickup and drop-off times. Please read it carefully, even if you think nothing has changed for your family. If you did not receive an email by {date}, please check your spam folder, then contact the transportation office so we can confirm your contact information.",
        "Families can look up their child's new stop using the online route finder on the district website. Enter your home address and the student's grade to see the closest stop, the bus number, and the expected times. The same information will be printed on a card that drivers will hand to each student on the first day of the new routes."
      ],
      [
        "We ask students to be at their stop at least five minutes before the posted pickup time. Times are estimates, and buses can run a little early on quiet days or late in poor weather. Drivers are not able to wait for students who are not at the stop, since a delay at one stop affects every family further along the route.",
        "Please have children waiting at the stop a few minutes before the bus is due. Drivers will not honk or knock on doors. In winter, buses may run late because of icy roads, and on very snowy days the district may cancel service on some hill routes. Closures are posted on the district website and announced on local radio by 6:30 a.m."
      ],
      [
        "Students in kindergarten and grade one must be met at the bus stop by a parent, guardian, or another adult named on their registration form. If no adult is there, the driver will keep the child on the bus and return them to the school, where staff will call home. This rule is in place to keep our youngest riders safe.",
        "For the safety of younger children, an adult must be at the stop in the afternoon to meet any student in kindergarten through grade two. Drivers carry a list of approved adults for each child. If plans change and someone else will be meeting your child, please send a note to the school office or update the online form."
      ],
      [
        "Some families may now live outside the walk limit for their school but no longer have a nearby stop because of the changes. If this applies to you, please contact the office. In some cases, a courtesy seat may be offered on another route, as long as space is available and the stop does not add much time to the trip.",
        "If the new stop is too far for your child to walk safely, for example because there is no sidewalk or the road has heavy truck traffic, please tell us. Transportation staff will look at each case and may adjust a stop location. We cannot add stops at every driveway, but we do take real safety concerns seriously."
      ],
      [
        "Riding the bus is a privilege, and students are expected to follow the same rules as at school. They should stay seated, keep the aisle clear, and speak at a normal volume so the driver can concentrate on the road. Cameras are installed on most buses, and serious behaviour problems can result in a student losing bus service for a period of time.",
        "Please talk with your children about bus safety before the new routes begin. Students should cross only in front of the bus, where the driver can see them, and never go back for something dropped near the wheels. They should wait for the bus well back from the edge of the road and keep their backpacks on their laps during the ride."
      ],
      [
        "Thank you for your patience as drivers and families adjust to the new schedule. The first week often has small delays as everyone learns the routes and new stops. For questions, please call the transportation office at {phone} on school days from 7:00 a.m. to 4:00 p.m., or send an email to {email}.",
        "We appreciate the support of parents and guardians as we put these changes in place. Our drivers are proud to get your children to school safely every day. If you have concerns about your child's route, stop, or times, please reach the transportation department at {phone}, or speak with the principal at your school."
      ]
    ],
    "details": [
      "Route {ref} (formerly Routes 12 and 14) now begins at {street} at {time}, arriving at {city} Elementary by 8:20 a.m.; the afternoon run departs the school at {time2}, approx. 5 min later than before.",
      "Stop No. 47, previously on the curve at Old Island Highway, moves to the corner of {street2} and Cedar Lane, approx. 200 m south; driver {p1} will point out the new stop each morning until {date3}.",
      "Kindergarten to Grade 2 students must be met by an adult on the \"Authorized Pickup\" list; if no adult is present, {p2_first} at the school office calls the number on file, e.g. {phone}, and the child waits at {city} Elementary.",
      "Courtesy seats are offered only where space exists after all eligible riders (those living more than {km} from school) are seated; requests must reach {p2} by {date} for review.",
      "Snow-day decisions are made by approx. 5:45 a.m.; hill routes {ref2} and No. {number} are the first to be cancelled, and notices appear on the district site, Facebook page, and radio stations by {time}.",
      "Per Policy 503 (\"Student Conduct on Buses\"), a first serious incident on route {ref2} results in a meeting with principal {p3} and parents; a second may mean suspension of riding privileges for up to {number2} school days.",
      "District buses are maintained by {company} under contract No. {ref}; each bus has 3-point seatbelts in the first {number} rows, interior cameras, and a GPS unit that logs stop times for review.",
      "Families who have moved, changed schools, or did not receive a route email by {date} should update their details through the parent portal or call {p3} at {phone}, ext. 207."
    ]
  },
  {
    "id": "e08-road-paving-project",
    "kind": "notice",
    "title": "Road paving project: traffic impacts and driveway access",
    "orgs": [
      "City of {city} Engineering and Public Works",
      "{city} Transportation Services"
    ],
    "senderTitles": [
      "Project Manager, Road Rehabilitation",
      "Construction Coordinator",
      "Manager of Capital Projects"
    ],
    "subjects": [
      "Paving work on your street begins {date}",
      "Road rehabilitation: what to expect"
    ],
    "sections": [
      [
        "The city will be repaving a section of road in your neighbourhood this summer as part of the annual road renewal program. The existing asphalt has cracked and settled over time, and several patches have broken down after the last two winters. The work will give the street a smooth new surface, new curb ramps at corners, and fresh line painting for crosswalks.",
        "Work to rebuild the road surface near your home is scheduled to begin on {date}. Inspections over the winter showed widespread cracking, potholes, and areas where water pools along the gutter. Rather than continuing to patch these spots, the city will grind off the old asphalt, repair the base where needed, and lay a new surface from curb to curb."
      ],
      [
        "Our contractor, {company}, will complete the work in several stages. First, crews will adjust manhole covers and catch basins. Next, a large milling machine will grind away the top layer of asphalt. After any soft spots in the road base are repaired, the new asphalt will be laid and rolled. Line painting follows about a week later.",
        "The project will be carried out by the city's paving contractor, {company}. Crews will start by removing the old surface with grinding equipment, which leaves a rough, grooved road for several days. That surface is safe to drive on at slow speeds but can be noisy. Final paving usually takes one or two days for each block."
      ],
      [
        "Traffic will be reduced to a single lane during working hours, with flaggers directing vehicles in each direction. Drivers should expect delays of up to ten minutes at busy times. On the days when final paving happens, the road may be closed to through traffic for most of the day, and detour signs will be posted to guide drivers around the area.",
        "Expect lane closures, flaggers, and slower traffic throughout the project. Transit buses will continue to run but may be moved to a temporary stop around the corner. Cyclists are asked to dismount and walk their bikes through the work zone when crews are active, since the milled surface and loose gravel can be slippery."
      ],
      [
        "We understand that driveway access matters to every household. Crews will do their best to keep driveways open, but there will be short periods, usually a few hours, when you cannot drive in or out. Residents will receive a door hanger at least one day before their driveway is affected, so they can move vehicles onto a side street.",
        "During final paving, driveways directly on the work area will be blocked while the new asphalt is placed and rolled. Fresh asphalt is hot and soft, so vehicles cannot drive on it until it cools, usually two to four hours. If you will need your car during that time, please park it on a nearby side street the night before."
      ],
      [
        "Work is expected to take place on weekdays between 7:00 a.m. and 7:00 p.m., with paving planned to finish by {date2}. Wet weather can delay asphalt work because it cannot be placed on a damp surface, so the schedule may shift. Updates will be posted on the city website and on the project sign at each end of the work zone.",
        "Construction will take roughly three weeks, depending on weather. Crews will work weekdays, with some Saturdays possible if rain causes delays. We expect the new surface to be complete by {date2}. Please watch for temporary no-parking signs, which will be placed at least 24 hours before they take effect, and move vehicles as needed."
      ],
      [
        "Garbage, recycling and organics collection will continue as normal. If the collection truck cannot reach your home on pickup day, crews will move carts to the nearest accessible corner and return them afterward. Please label your carts with your house number. Mail and package deliveries should not be affected, though drivers may need to walk a short distance.",
        "Curbside collection will not be interrupted. Please put your carts out at the usual time, and the contractor's crew will help the collection truck reach them if the road is closed. Emergency vehicles will always be given access through the work zone, and crews have been trained to clear a path for fire trucks and ambulances right away."
      ],
      [
        "There will be some noise, dust, and vibration, especially while grinding equipment is in use. Crews will spray water to keep dust down. Residents with special needs, such as someone who relies on accessible transportation or home nursing visits, are encouraged to contact the city ahead of time so that crews can plan access around those appointments.",
        "Construction can be disruptive, and we appreciate your patience. If anyone in your household relies on daily visits from a care aide, a HandyDART pickup, or medical deliveries, please let us know. With a little advance notice, crews can usually arrange a time window when vehicles can safely reach your door, even on the busiest paving days."
      ],
      [
        "If you have questions or concerns during construction, please call the project line at {phone}. After hours, urgent issues such as a blocked driveway during an emergency can be reported to the public works dispatcher. Thank you for your patience and understanding while we make these lasting improvements to your street.",
        "The new road should last for many years and give drivers, cyclists and pedestrians a safer, smoother surface. For questions about the schedule, driveway access, or anything else about the project, please contact the city at {phone} or {email}. Thank you for your understanding as we complete this important work."
      ]
    ],
    "details": [
      "Project limits: {street} from Pine Avenue to Hollyridge Road, approx. {km} of two-lane roadway, plus side-street tie-ins; contract No. {ref}, awarded to {company} in the amount of {amount}.",
      "Stage 1 (adjust manholes and catch basins) begins {date}; Stage 2 (mill 50 mm of asphalt) follows; Stage 3 (base repair and 60 mm overlay by {company}) is planned to finish by {date2}, weather permitting.",
      "BC Transit Route {number} will use a temporary stop on {street2} (approx. 80 m north of the regular stop) between {time} and {time2} on paving days; watch for orange \"Stop Moved\" signs.",
      "Driveway closures on {street} are announced by yellow door hangers at least 24 hrs ahead; fresh asphalt needs 2 to 4 hrs to cool, so plan to park on {street2} from approx. {time} onward.",
      "Residents needing access for medical reasons (e.g. home dialysis supplies, HandyDART) should call inspector {p1} at {phone} by {date}, quoting the address and the time window needed.",
      "Noise permit No. {ref2} allows milling from 7:00 a.m. to 7:00 p.m. on weekdays; complaints outside those hours may be reported to {phone}, and bylaw officer {p2_last} will follow up.",
      "Pavement markings (crosswalks, stop bars and bike lane symbols) on {street} will be applied by {company2} approx. {number} days after paving, once the asphalt has cured enough to hold paint.",
      "The city's warranty holdback of {percent} on this contract covers defects such as ravelling, cracking or settlement for 2 years; residents noticing problems after {date3} can email {email}."
    ]
  },
  {
    "id": "e09-curbside-recycling-changes",
    "kind": "letter",
    "title": "Curbside recycling changes: new cart, accepted items and new day",
    "orgs": [
      "City of {city} Solid Waste Services",
      "{city} Regional Recycling and Waste Program"
    ],
    "senderTitles": [
      "Solid Waste Programs Supervisor",
      "Zero Waste Coordinator",
      "Manager of Environmental Services"
    ],
    "subjects": [
      "Your new recycling cart and pickup day",
      "Changes to curbside recycling at {street}"
    ],
    "sections": [
      [
        "We are writing to let you know about several changes to curbside recycling at your home. Starting this fall, the blue bags and open boxes you have been using will be replaced with a wheeled recycling cart with an attached lid. The change will reduce litter on windy days, keep paper dry, and allow collection trucks to empty carts with a mechanical arm.",
        "Recycling service at your address is changing. After a pilot program in two neighbourhoods last year, council approved a move to wheeled carts for all single-family homes. Residents in the pilot told us the carts were easier to roll to the curb than heavy boxes, and our crews saw far less paper blowing around streets after pickup."
      ],
      [
        "Your new cart will be delivered to your home during the week of {date}. It will be left at the end of your driveway with an information package inside the lid. Each cart has a serial number linked to your address, so please do not swap carts with neighbours. If you are away when it arrives, simply bring it in when you get home.",
        "A delivery crew will drop off your recycling cart sometime before {date}. It will have a blue lid and a sticker showing what can go inside. The cart belongs to the city and stays with the house if you move. Your old blue boxes can be kept for storing items in the garage or returned to the depot for recycling."
      ],
      [
        "Some items you could recycle before are changing. Glass bottles and jars must no longer go in your cart, because broken glass contaminates paper and makes it hard to sell. Please take glass to a depot instead. Plastic bags and overwrap, such as bread bags and the plastic around paper towels, also go to the depot, not the cart.",
        "Accepted items now include paper, flattened cardboard, plastic containers, tins and cans, milk cartons, and paper cups. Glass and soft plastic film are not accepted in the cart. Foam packaging, like the white blocks around a new television, should also go to a depot. A full list is printed on the lid, and you can also search items online."
      ],
      [
        "Please rinse containers so they are free of food, and leave lids on bottles. Items do not need to be spotless. A quick swirl of water is enough. Cardboard should be cut or folded so it fits inside the cart with the lid closed. Anything left on top of or beside the cart will not be collected.",
        "To help keep recycling clean, please empty and rinse food containers, flatten boxes, and place loose items directly in the cart. Do not bag your recycling, since bags tangle in the sorting machines at the processing plant. If you have more cardboard than will fit one week, keep the extra for the next pickup or drop it off at the depot."
      ],
      [
        "Along with the new cart, your collection day is also changing. Starting {date2}, recycling at your home will be picked up every second week on a different day than before. Your garbage and food scraps day will stay the same. The enclosed calendar shows your new schedule, and it can also be found on the city website or app.",
        "Because routes are being rebalanced across the city, your recycling day will move as of {date2}. We know this can be confusing at first, so the enclosed calendar has your new pickup days marked in blue. A free app is also available that sends a reminder the night before. Please keep the calendar on your fridge."
      ],
      [
        "Carts should be at the curb by 7:00 a.m. on collection day, with the handle facing your house and the wheels toward the street. Leave about one metre of space around the cart so the truck's arm can reach it. Please do not place carts behind parked cars, under trees with low branches, or on top of snowbanks.",
        "On collection day, roll your cart to the edge of the road with the lid closed and the arrows on top pointing toward the street. Make sure there is room between the cart and your garbage bin, mailbox, or parked vehicles. After pickup, bring the cart back onto your property the same day to keep sidewalks clear for walkers."
      ],
      [
        "If your cart is damaged, stolen, or too large for your needs, please contact us. Smaller carts are available for households that produce less recycling, and larger carts can be ordered for a small one-time fee. Residents with mobility challenges can request help, and crews may collect from a spot closer to the house.",
        "We realize that not every home is the same. If you have a steep driveway, a long walkway, or a physical limitation that makes rolling a cart difficult, please let us know. Our assisted collection program may be able to help. Cart repairs, such as a broken lid or wheel, are made at no cost to residents."
      ],
      [
        "Thank you for helping us make recycling cleaner and more efficient in {city}. If you have any questions about your cart, your new schedule, or which items belong where, please call our waste hotline at {phone} or visit our website. We truly appreciate your support and patience during the transition.",
        "These changes will help keep more material out of the landfill and save money over time. If you have any questions, please contact Solid Waste Services at {phone} or by email at {email}. Thank you for taking the time to read this letter and for your continued efforts to recycle right."
      ]
    ],
    "details": [
      "Cart delivery for {street}: 240 L blue-lid cart, serial No. {ref}, scheduled for the week of {date}; smaller (120 L) or larger (360 L) carts may be requested by calling {phone}.",
      "Upgrading to a larger 360 L cart carries a one-time fee of {amount}; the request must be made before {date2}, after which a {amount2} exchange charge applies to each swap.",
      "Glass bottles and jars, soft plastics (e.g. bread bags, overwrap), and expanded polystyrene (\"Styrofoam\") go to the depot at {street2}, open {time} to {time2}, Tuesday to Saturday.",
      "Starting {date2}, Zone C recycling in {city} moves from Wednesday to alternate Mondays; garbage and organics stay on Thursday, and the app sends reminders the evening before, at approx. {time2}.",
      "Contamination audits by {company} found approx. {percent} of material in last year's blue bags was not recyclable; carts at {street} with obvious contamination will receive an \"Oops\" tag on or after {date2}.",
      "Assisted collection applies to residents who cannot move a cart to the curb (e.g. mobility limitation, no able-bodied household member); apply through {p1} at {phone} with a doctor's note by {date3}.",
      "Damaged or missing carts should be reported to {phone} within {number} days; replacement is free unless the damage resulted from misuse, such as hot ashes, in which case a fee of {amount} may apply.",
      "Collection trucks operated by {company2} use a side-loading arm with a reach of approx. 2.5 m; carts placed closer than 1 m to a mailbox or fence at {street} may be skipped, says supervisor {p2}."
    ]
  },
  {
    "id": "e10-notice-of-entry-inspection",
    "kind": "letter",
    "title": "Landlord's notice of entry for annual inspection and smoke alarm test",
    "orgs": [
      "{city} Rental Properties Ltd.",
      "Westshore Residential Management"
    ],
    "senderTitles": [
      "Property Manager",
      "Resident Manager",
      "Building Operations Coordinator"
    ],
    "subjects": [
      "Notice of entry to your unit, {date2}",
      "Annual inspection and smoke alarm test"
    ],
    "sections": [
      [
        "This letter is formal notice that we will need to enter your rental unit at {street} for the yearly suite inspection and smoke alarm test. Under the Residential Tenancy Act, a landlord must give at least 24 hours' written notice before entering, stating the date, a time window, and the reason. This letter is meant to give you more notice than the law requires.",
        "As part of our yearly maintenance program, every unit in the building will be inspected over the coming weeks. Your suite is scheduled for a visit on {date2}. We are sending this notice well ahead of time so you can plan around it, and we have included the reasons for the visit as the tenancy laws require."
      ],
      [
        "The visit will take place on {date2} between {time} and {time2}. We expect to spend about twenty minutes in your unit, but because we are visiting several suites that day, we cannot give an exact time. You do not need to be home. If you are not present, we will knock, announce ourselves, and enter with the master key.",
        "Our staff will arrive during the window shown on this notice and will spend roughly fifteen to thirty minutes in your suite. You are welcome to be present, but it is not required. If no one answers the door, we will let ourselves in, complete the inspection, and leave a card on the kitchen counter to show that we were there."
      ],
      [
        "The main purpose of the visit is to test every smoke alarm in the unit. We will press the test button on each alarm, check the date printed on the back, and replace any batteries or units that are close to the end of their life. We will also test the carbon monoxide alarm if your suite has a gas appliance or fireplace.",
        "Smoke alarms must be tested every year, and this visit makes sure yours are working. Our technician will use a small aerosol test spray to confirm each alarm responds to smoke, not just to the test button. Any alarm older than ten years, or one that has been painted over or taken off the ceiling, will be replaced at no cost."
      ],
      [
        "While we are in the unit, we will also do a general check of its condition. This includes looking under sinks for slow leaks, checking that windows open and lock, testing the bathroom fan, and making sure the baseboard heaters are clear. We will note anything that needs repair so that it can be fixed, rather than judging your housekeeping.",
        "In addition to the alarms, we will look at the plumbing, appliances, and windows. Small problems such as a dripping tap, a loose cupboard door, or a worn seal on the fridge are much easier to fix when they are caught early. If you already know of anything that needs repair, please leave a note on the kitchen counter for the inspector."
      ],
      [
        "To help the visit go smoothly, please make sure we can reach the area under the kitchen and bathroom sinks and that nothing is stacked in front of the electrical panel or the hot water tank. If you have a pet, please keep it in a crate or a closed room, and let us know in advance if there is anything we should be aware of.",
        "We ask that pets be secured while staff are in your unit, both for their safety and ours. Please also clear a path to each smoke alarm, which may mean moving a tall bookshelf or plant. If an alarm is in a bedroom, our staff will enter only long enough to test it, and will be respectful of your space and belongings."
      ],
      [
        "If the date does not work for you, for example because of a night shift or a medical concern, please contact the office as soon as possible. We will try to arrange another time that suits you. Please note that we do need to complete the inspection, as it forms part of our fire safety duties under the building's fire safety plan.",
        "If you would like to reschedule, please let us know at least two days in advance. We understand that some tenants work shifts, care for young children, or have health conditions that make an unexpected visit difficult. We will do our best to find another date, though the alarm test must be finished before the fire department's annual inspection."
      ],
      [
        "You have the right to quiet enjoyment of your home, and we take that seriously. Our staff will only enter for the reasons listed in this notice. They will not look through personal belongings, open drawers, or take photos of anything other than items that need repair. If you have any concerns about how the visit was handled, please tell us.",
        "Please remember that it is against the law to disconnect or remove a smoke alarm, even if it goes off when you cook. If your alarm sounds often while making toast or frying food, tell our staff during the visit. We can move it a short distance or install a model with a hush button, which is far safer than removing it."
      ],
      [
        "Thank you for your cooperation. If you have questions or need to change the date, please call the management office at {phone} during business hours, Monday to Friday. Our staff can also answer questions about your smoke alarms or any repair you have been meaning to report. We appreciate your help in keeping the building safe for everyone who lives here.",
        "We appreciate your help in keeping your home and your neighbours safe. If you have questions about this notice or want to arrange a different time, please contact me at {phone} or {email}. Thank you, {r_title}, for your cooperation, and we look forward to seeing your suite in good condition."
      ]
    ],
    "details": [
      "Notice of entry served on {date} by posting to the door of Unit 304, {street}; under s. 88 of the Residential Tenancy Act (RTA), notice posted on a door is deemed received 3 days later, per file {ref}.",
      "Entry window: {date2}, {time} to {time2}; purpose: (a) annual smoke and CO alarm test per BC Fire Code s. 6.3, and (b) general condition inspection; staff attending: {p1} and technician {p2}.",
      "Alarms found older than 10 years (check the date stamp on the base) will be replaced with a hard-wired photoelectric model supplied by {company}; technician {p2_first} carries approx. {number} spare units on {date2}.",
      "To reschedule, contact {p3} at {phone} (ext. {number}) at least 48 hrs before the entry window; a new notice will be issued for a date no later than {date3}, when the fire inspection takes place.",
      "Tenants with pets (e.g. cats, dogs, birds) should confirm arrangements with {p1} in advance; staff will not enter with an unsecured dog, and a missed visit may lead to a fee of {amount} under clause {number2}.",
      "Under s. 29(1)(b) of the RTA, a landlord may enter between 8 a.m. and 9 p.m. only; this notice for {street} complies, and the tenant may be present but is not required to be, per policy {ref} ({city} office).",
      "Repairs noted during the inspection (e.g. leaking P-trap, torn window screen) will be logged as work order No. {ref2} and scheduled within approx. {number} business days by our contractor, {company2}.",
      "Disabling an alarm (removing the battery, unplugging, or covering the sensor with tape or a shower cap) breaches the tenancy agreement; a repeated breach at {street} after {date3} may result in a {amount2} charge."
    ]
  },
  {
    "id": "f01-salmon-run-count",
    "kind": "article",
    "title": "Counting the autumn salmon run",
    "orgs": [
      "{city} Streamkeepers Society",
      "Upper Valley River Stewards"
    ],
    "senderTitles": [
      "Newsletter Editor",
      "Volunteer Coordinator",
      "Outreach Writer"
    ],
    "subjects": [
      "The salmon are back in the river",
      "Counting fish, one riffle at a time"
    ],
    "sections": [
      [
        "Every October the river below the old highway bridge starts to change colour. Dark shapes hold in the slow water behind boulders, and the first coho push upstream after a good rain. For the people who walk the banks with clipboards and polarized glasses, it is the busiest and happiest stretch of the year, and the run began in earnest on {date}.",
        "If you stand on the footbridge near the hatchery on a grey fall morning, you may hear the salmon before you see them. A sudden slap of water, a tail breaking the surface, then a long silver back sliding over the gravel. The returning fish have travelled a long way from the open Pacific, and local volunteers are waiting to count every one they can."
      ],
      [
        "Most of the fish in this river are coho and chum, with a smaller number of pink salmon in odd-numbered years. Chum tend to arrive first and spawn in the lower reaches, close to tidewater. Coho are stubborn climbers that wait for higher water, then work their way into the small side creeks where cool, clean gravel gives their eggs the best chance.",
        "A salmon that reaches this river has spent two to four years at sea, depending on the species. It stops eating once it enters fresh water and lives on stored fat for the rest of the journey. Males grow hooked jaws and turn deep red or mottled green, while females search out loose gravel where they can dig a nest, called a redd, with their tails."
      ],
      [
        "The counting itself is simple in theory. Teams of two walk a set section of river, one person spotting and one person writing. They record live fish, spawned-out carcasses and any redds they can see. {p1}, who has led the count for {number} years, says the trick is patience: stand still, let your eyes adjust to the glare, and the fish slowly appear.",
        "Volunteers work in pairs and stick to the same stretch of bank all season, so they learn every pool and log jam by heart. One person calls out what they see while the other marks it on a waterproof tally sheet. Live fish, dead fish and nests each get their own column, and anything unusual, like a tagged fish or a bear track, goes in the margin."
      ],
      [
        "Carcasses tell their own story. Counters snip a small notch in the tail of each dead fish they record so it is not counted twice on the next walk. Some carcasses are measured, and a few have scales collected in small paper envelopes. Back at the lab, those scales are read like tree rings to work out how old each fish was.",
        "Not every number comes from a riverbank. On the main stem, a fish fence with a narrow gate lets staff count salmon one at a time as they pass through. An underwater camera at the gate records around the clock, and volunteers later review the footage at the clubhouse on {street}, pausing and rewinding whenever two fish swim through side by side."
      ],
      [
        "Water levels shape everything. After a heavy storm the river turns the colour of milky tea and nobody can see a thing, so surveys are postponed until it clears. In a dry autumn the opposite happens: fish pile up at the river mouth, waiting for enough flow to carry them over the shallow riffles, and counters watch the forecast as closely as any farmer.",
        "The weather is the boss of this project. A dry September can leave salmon milling in the estuary for weeks, and a big atmospheric river can blow out the creek overnight. Coordinators send a short message each evening telling teams whether the next day is a go. Most volunteers keep their boots and rain gear by the door from October to December."
      ],
      [
        "The data does not stay in a binder. Every sheet is entered into a regional database shared with fisheries biologists, who compare this river with dozens of others along the coast. A good year here can help explain a poor year somewhere else. Over time, the counts show which creeks are recovering after restoration work and which still need help.",
        "Why does any of this matter? Salmon are a measure of a whole watershed. A healthy run means clean water, cool shade, and gravel that is not choked with silt. When the numbers dip, biologists start asking questions about logging upstream, culverts that block passage, or warm summers at sea. The volunteer counts give them years of steady, local evidence."
      ],
      [
        "The salmon also feed far more than people. Eagles gather in the bare alders by the dozen, gulls work the shallows, and black bears drag carcasses into the forest. Researchers have found nitrogen from the ocean in streamside cedars, carried there by fish that died and decayed on the bank. In a real sense, the sea helps grow the trees.",
        "A walk along the river in late fall is not quiet. Bald eagles call from the cottonwoods, ravens argue over scraps, and the smell of spent fish hangs in the damp air. It can be a strong smell, but it is a good sign. Nutrients from the ocean are soaking into the soil, feeding insects, young trout and the next generation of salmon."
      ],
      [
        "New counters are always welcome, and no experience is needed. A short training walk covers safety, fish identification and how to fill out the sheets. Waders are provided, though a good pair of rubber boots will do on most stretches. To sign up, call {phone} or drop by the society's table at the {city} farmers market on Saturdays.",
        "If you would like to see the run for yourself, the viewing platform beside the hatchery is open daily, and the best fish watching is usually in the two weeks after the first big rain. Please keep dogs on a leash and stay off the gravel bars. Anyone interested in joining next season's count can reach the coordinator at {email}."
      ]
    ],
    "details": [
      "Survey reach No. 4 (approx. {km} upstream of the {street} culvert) recorded {number} live coho, {number2} carcasses and three 'fresh' redds on {date}, according to tally sheet {ref}.",
      "Scale envelopes collected on {date2} were labelled 'CO-adult; fork length in mm' and couriered to the lab by our carrier, {company}, under shipment No. {ref2}.",
      "{p2} reported a floy-tagged chum (yellow tag, partly illegible: 'SR-1?') holding below the log jam near {street2} at approx. {time}; the sighting was logged as unconfirmed pending video review.",
      "The fish fence on the main stem counted {bignumber} salmon between {date} and {date3}, an increase of {percent} over the ten-year average; e.g. coho alone made up roughly half the total.",
      "Survey teams assigned to {city2} reaches must carry a charged radio, a throw bag and a whistle; anyone entering water deeper than mid-thigh must first check in with {p3} at {phone} (ext. 2).",
      "Hydrometric station 08HB-{number} showed the river dropping from bank-full to a 'wadeable' stage by {time2} on {date2}, so the postponed walks were rescheduled for the following morning.",
      "Volunteers who logged more than {number} survey hours this season will receive a hand-carved cedar pin at the year-end potluck, held at {street} on {date3} (doors open at {time}).",
      "Restoration crews from {company2} placed {number2} large woody-debris structures in Side Channel B last summer; spawners used approx. {percent} of the new gravel pads within a single season."
    ]
  },
  {
    "id": "f02-lighthouse-keepers",
    "kind": "article",
    "title": "The families who kept the light",
    "orgs": [
      "{city} Heritage Society",
      "Outer Point Lightstation Friends"
    ],
    "senderTitles": [
      "Heritage Columnist",
      "Society Archivist",
      "Newsletter Editor"
    ],
    "subjects": [
      "A century at the edge of the rocks",
      "Life and work at the point light"
    ],
    "sections": [
      [
        "The lighthouse at the end of the point is the first thing many visitors photograph, a white tower with a red lantern room standing on a shelf of black basalt. It looks peaceful on a calm summer day. For the families who lived beside it for more than a century, though, it was a workplace, a home and, during winter gales, a very lonely post.",
        "Long before there was a paved road to the point, ships rounding the headland relied on a single lamp burning behind thick glass. The first tower was wooden and octagonal, built after a coastal steamer struck the reef in heavy fog. Its replacement, the concrete tower that stands today, was finished a few decades later and has guided boats ever since."
      ],
      [
        "The early lamp burned coal oil and had to be lit at sunset and trimmed through the night. A clockwork mechanism turned the lens, and the keeper wound its heavy weights by hand every few hours. If the clock stopped, the light stopped flashing its pattern, and a passing captain might mistake it for another station further up the coast.",
        "Inside the lantern room sat a large glass lens made of rings of prisms that bent the lamp's glow into a strong, narrow beam. Polishing that glass was a daily chore. Keepers wore linen aprons so their buttons would not scratch the prisms, and curtains were drawn during the day to keep the sun from focusing through the lens and scorching anything inside."
      ],
      [
        "Fog was the real enemy. When it rolled in, the keeper started the diesel horn and kept it sounding every half minute, sometimes for days at a stretch. Children who grew up at the station said they learned to sleep through the blast, and they woke instantly when it stopped, because silence meant something had gone wrong with the engine.",
        "Weather reports were part of the job too. Several times a day the keeper read the wind, the sea state and the visibility, then radioed the numbers to the coast guard. Fishermen listening on their sets knew the voice well. {p1} recalls hearing {p1_his} grandmother give the report at dawn, calm and precise, even when the spray was hitting the windows."
      ],
      [
        "Families made their own fun. There was a garden in a sheltered hollow behind the house, a few hens and sometimes a goat. Supply boats came every two weeks in good weather, less often in winter, so pantries were stocked with flour, tinned milk and dried beans. Correspondence courses arrived by mail, and kitchen tables doubled as school desks.",
        "Growing up on the point meant knowing the tides better than the calendar. Children explored the rocky coves at low water, kept tally of passing freighters, and watched sea lions haul out on the reef. Lessons came by mail and were returned by the supply boat. Birthdays were sometimes celebrated a week late, whenever the cake ingredients finally arrived from {city}."
      ],
      [
        "One family stayed longer than any other. The keeper arrived as a young assistant, married a schoolteacher from {city2}, and raised four children at the station. Their eldest son later became a keeper himself further north. The family's logbooks, now in the heritage society's collection, record storms, shipwreck sightings and the first robin of every spring.",
        "The station logbooks are full of small, human details. One entry notes a whale passing close enough to hear it breathe. Another describes the night the power failed and the keeper turned the lens by hand until morning. There are notes about lost dogs, injured seabirds and a piano delivered by boat and hoisted up the cliff with a winch."
      ],
      [
        "Automation came gradually. An electric light replaced the oil lamp, then a radio beacon was added, and eventually solar panels and a small modern lens took over. Several stations on this coast are still staffed, partly for safety and partly because keepers report the weather and help with rescues. Others were left to run on their own.",
        "Like many lights on this coast, the point station was eventually considered for full automation. Local mariners pushed back, arguing that a person on site could spot a boat in trouble, call in a rescue and report real conditions in a way no sensor could. For a time the station kept a keeper, and the debate became a familiar topic at council meetings."
      ],
      [
        "Today the tower is a designated heritage lighthouse, and the keeper's house has been restored as a small museum. Volunteers have rebuilt the picket fence, repainted the trim in its original colours and put the old foghorn on display. The lantern room is closed to the public, but guided tours climb partway up the tower on summer weekends.",
        "Visitors can now walk a trail to the point and read panels about the station's history. The heritage society has collected photographs, uniforms and a brass clock from the old lantern room. On {date}, descendants of several keeper families gathered at the site for a reunion, sharing stories and comparing faded snapshots of the same rocks and the same white tower."
      ],
      [
        "The museum is open from late spring to Thanksgiving, and admission is by donation. Anyone with photographs, letters or memories of the station is invited to contact the archivist at {email}. Even a single snapshot can fill a gap in the record, such as the date the old fog bell was removed or which family planted the apple tree.",
        "If you go, wear sturdy shoes, check the tide table and give the sea lions plenty of room. The trail is about an hour's walk return, with a few steep steps near the end. The heritage society hosts a lantern evening each August, when the tower is lit up for a few hours and volunteers tell stories of the keepers."
      ]
    ],
    "details": [
      "Logbook entry No. {number} (dated {date}) reads: 'Wind SE 45 kn, visibility nil; horn running since {time}; steamer heard but not seen' and is initialled by the head keeper.",
      "The second-order Fresnel lens (approx. 1.8 m tall, cast in France) was removed on {date2}, crated by our carrier, {company}, and loaned to the maritime museum in {city2} under agreement {ref}.",
      "{p2}, whose family kept the light for {number2} years, visited the archive on {date2} and donated a brass barometer, two uniform caps and a hand-written recipe titled 'Keeper's Molasses Bread' to the archive.",
      "Restoration of the keeper's house (roof, cedar shingles, sash windows and lead-paint abatement) cost approx. {amount}, was completed by our contractor, {company2}, and was funded partly by a heritage grant and partly by {bignumber} individual donations.",
      "Supply-boat manifests from the 1930s list flour, coal oil, kerosene wicks, tinned salmon and 'one (1) school parcel' for the keeper's children; see accession file {ref2}, box {number}, shelf {number2}.",
      "Guided tower tours run Saturdays at {time} and {time2} from mid-June to Labour Day; groups are limited to {number} people, and tickets can be reserved at {phone}.",
      "Interpretive panel No. {number2} near the trailhead on {street} (approx. {km} from the parking lot) explains the station's light characteristic, 'Fl W 10s' (one white flash every ten seconds), and how mariners used it for position fixing.",
      "Archivist {p3_title} notes that {percent} of the society's photographs remain unidentified; e.g. a print labelled only 'Point, winter, family on porch' may date from any decade before {date3}."
    ]
  },
  {
    "id": "f03-tide-pool-guide",
    "kind": "article",
    "title": "Exploring tide pools without harm",
    "orgs": [
      "{city} Shoreline Naturalists",
      "Rocky Shore Education Collective"
    ],
    "senderTitles": [
      "Naturalist Columnist",
      "Education Coordinator"
    ],
    "subjects": [
      "What lives in a tide pool",
      "Low tide, gentle feet"
    ],
    "sections": [
      [
        "Twice a day the ocean pulls back from the rocky shore and leaves behind small pockets of sea water. At first glance a tide pool looks like a puddle with a few snails in it. Kneel down and wait a minute, though, and the puddle comes alive: tentacles open, a hermit crab scuttles sideways, and a tiny fish darts under a frond of seaweed.",
        "The best tide pooling on this coast happens on the lowest tides of late spring and summer, when the water drops well below the usual line in the early morning. Families arrive with rubber boots and a thermos of hot chocolate. On {date}, one of the season's lowest tides, the naturalists' club counted more than a dozen groups on the reef before breakfast."
      ],
      [
        "Life in a tide pool is not easy. The animals living there get pounded by waves, then baked by sun, then soaked by rain that waters down the salt. Each species has its own way to cope. Mussels clamp shut, barnacles seal their plates, and anemones pull in their tentacles and become soft green blobs that hold on to a little water.",
        "Imagine a home that floods twice a day and dries out in between. That is the rocky intertidal zone. Creatures higher up the shore, like acorn barnacles and periwinkle snails, can survive hours out of water. Lower down, where the sea covers the rocks most of the time, you find more delicate animals, including sea stars, sea urchins and brightly coloured nudibranchs."
      ],
      [
        "Look for ochre sea stars in purple and orange clustered on the mussel beds. Giant green anemones sit in the deeper pools, glowing like stained glass when the light hits them. Under rocks you may find porcelain crabs, flat and quick, and tiny sculpins that match the colour of the gravel so closely that you only notice them when they move.",
        "Some of the most interesting animals are the smallest. Look closely at a patch of pink coralline algae and you may see a chiton, an oval mollusc with eight plates along its back. Lined shore crabs hide in cracks, and the pale orange blob on a rock might be a sea cucumber folded up tight. A hand lens makes a big difference."
      ],
      [
        "The golden rule is to leave everything as you found it. If you lift a rock to look underneath, lower it back gently in the same spot, because the animals living below depend on that shade. Never pry a sea star or limpet off a rock. Their tube feet and muscles are easily torn, and the animal may not survive the damage.",
        "Walk on bare rock and sand where you can, and avoid stepping on mussel beds, barnacles and seaweed. One careless foot can crush dozens of small animals. Touch with a single wet finger, never a whole hand, since sunscreen and soap can harm delicate creatures. Buckets are best left at home; animals should stay in the pool where they live."
      ],
      [
        "Safety matters as much as gentleness. Rocks covered in algae can be as slick as ice, so wear shoes with good grip and keep your hands free. Never turn your back on the ocean, especially on exposed points where a large wave can surge without warning. Check the tide table before you go and start heading back as the water turns.",
        "Plan your visit around the tide, not the clock. Arrive about an hour before low tide and leave once the water starts creeping back. It is easy to get absorbed in a pool and look up to find your route cut off. On this coast, {p1}, a longtime club guide, always points out the escape path to every group before they spread out."
      ],
      [
        "Some beaches are protected areas where collecting anything, even an empty shell, is not allowed. Others are simply busy and under pressure from heavy foot traffic. Researchers have noticed that the most popular reefs have fewer large anemones and sea stars than quiet stretches nearby. Every visitor who walks carefully helps those populations stay healthy.",
        "Sea star populations along this coast dropped sharply several years ago when a wasting disease swept through. Some species are slowly recovering, and volunteers keep records of how many they see on each visit. A pattern is emerging: the stars are coming back faster in pools with fewer visitors. That is one more reason to step lightly and share space with the wildlife."
      ],
      [
        "Children are natural tide poolers. Give them a simple goal, such as finding five different colours or one animal with a shell and one without. A laminated identification card or a phone camera is better than a net. Many kids remember their first anemone for years, especially if they gently felt the sticky tentacles grip a fingertip.",
        "If you want to go deeper, try keeping a small notebook. Write down the date, the tide height, the weather and the animals you see. Over a season, patterns appear, like which pools hold the most crabs or when the nudibranchs arrive. Your notes may even be useful to local researchers tracking how the shoreline is changing over time."
      ],
      [
        "The naturalists' club runs free guided walks on the lowest tides of the summer, starting at the parking lot on {street}. Guides bring magnifiers, field guides and plenty of stories. No booking is required, but large groups are asked to call ahead at {phone} so the club can send an extra volunteer to keep the walk small and calm.",
        "Interested in becoming a beach guide yourself? The club offers a weekend training session each spring covering identification, tides and how to talk with visitors about protecting the shore. No science background is required, just curiosity and a willingness to get your knees wet. For details, contact the education coordinator at {email} or visit the club booth at {city} Days."
      ]
    ],
    "details": [
      "The {date} low tide at the {city} reference station was predicted at 0.2 m at {time}; {p1} and {number} other observers on the reef reported the water 'still dropping' approx. 20 minutes later.",
      "Volunteer {p2} recorded {number} ochre sea stars (Pisaster ochraceus), {number2} giant green anemones and one opalescent nudibranch in transect No. 3; see datasheet {ref}.",
      "Signage at the {street} access point reads: 'No collecting of shells, rocks or living organisms; dogs on leash; stay off mussel beds' and cites marine protected area order {ref}, in force since {date}.",
      "Survey results (e.g. pool depth, salinity, water temperature in deg. C) were forwarded to the university's intertidal lab in {city2} on {date2} under project file {ref2}.",
      "Guides (led by {p2_title}) carry a first-aid kit, a whistle and a radio set to the club channel; anyone separated from the group should return to the marker post near {street2} by {time2}.",
      "Over {bignumber} visitors used the north reef between {date2} and Labour Day, roughly {percent} more than the year before, which prompted the club to propose a rope-and-stake 'quiet zone' around the deepest pools.",
      "A laminated ID card (two-sided, waterproof, approx. 20 x 30 cm) illustrating {number} common species is available for {amount} from the club office on {street}, with proceeds going to the sea-star monitoring program.",
      "Club guide {p3_title} reminds visitors that hermit crabs, limpets and periwinkles must not be removed; a 'look but leave' pledge was signed by {number2} school groups before {date3}."
    ]
  },
  {
    "id": "f04-island-logging-railway",
    "kind": "article",
    "title": "Logging and rail on a small island",
    "orgs": [
      "{city} Island Museum and Archives",
      "Harbourside Historical Association"
    ],
    "senderTitles": [
      "Museum Curator",
      "History Columnist",
      "Archives Volunteer"
    ],
    "subjects": [
      "When the trains ran through the timber",
      "How logging built our island town"
    ],
    "sections": [
      [
        "Drive the island's main road today and you pass quiet coves, hobby farms and second-growth forest that looks as if it has always been there. A century ago the view was very different. Steam whistles echoed across the bay, the hills were being stripped of giant Douglas fir, and a narrow-gauge railway carried logs down to the water day and night.",
        "Ask an old-timer where the town began, and the answer usually points to the beach below the general store. That is where the first logging camp set up in a cluster of tents and shacks. Within a few years it had a cookhouse, a blacksmith, a bunkhouse for single men and a wharf long enough to load the scows that towed timber south."
      ],
      [
        "Early loggers worked with axes, crosscut saws and teams of oxen. Fallers stood on springboards notched into the trunk so they could cut above the thick, pitchy base of the tree. A single fir could take two men most of a day to bring down. Oxen then dragged the logs along a skid road made of greased timbers laid across the trail.",
        "The trees here were enormous. Photographs in the museum show men standing inside the undercut of a cedar, with room to spare. The first crews moved logs with oxen and horses, then with steam donkeys, which were heavy winches mounted on sleds. A donkey could pull a log in on a long steel cable, then winch itself forward to the next site."
      ],
      [
        "The railway changed everything. Laying track into the valley meant logs could come from farther inland, so the company built a line up the creek with trestles over the gullies. A small geared locomotive, designed to climb steep grades, hauled flatcars loaded with timber. The engineer's whistle signals became a kind of clock for families in town.",
        "Rail arrived on the island when the easy timber near the shore was gone. Crews graded a route along the valley floor and built a trestle across the river that still stands in pieces today. The geared engines were slow but powerful, and they could handle tight curves and sharp grades. On a good day, a train made several round trips to the booming ground."
      ],
      [
        "At the bottom of the line, logs rolled off the cars into the salt water at the booming ground. Boom men walked the floating logs in caulk boots, sorting them by species and size with long pike poles. The logs were chained into large rafts, then towed by tugboat across the strait to sawmills on the bigger island, a trip that could take days.",
        "The booming ground was its own small world. Workers balanced on rolling logs to guide them into place, and anyone who fell in got teased for a week. Rafted logs were bound with boom chains and swifters, then towed away by tug. Seagulls, herons and the occasional seal used the floating timber as a resting spot between tides."
      ],
      [
        "Families followed the jobs. A schoolhouse opened with a single teacher and a woodstove, and a dance hall went up beside the store. Most supplies arrived on a weekly steamer. {p1}, whose grandparents ran the cookhouse, says meals were huge: pancakes stacked high, beef stew, pies by the dozen, and coffee strong enough to keep a whole crew awake.",
        "Life in camp was hard but sociable. Single men lived in bunkhouses and ate in shifts at long tables. Married workers built small houses near the shore and kept gardens and chickens. Saturday dances drew people from neighbouring islands by rowboat, and a travelling preacher came by once a month. Many families stayed long after the company moved on."
      ],
      [
        "The good times did not last forever. Once the best stands were logged, the company pulled up its rails and moved the locomotives to a mainland operation. Some families left with it. Others stayed and found new work in fishing, farming or small sawmills. Old railbeds became roads, and a few of the trestle pilings still show at low tide.",
        "By the time the last train ran, trucks had begun to replace railways across the coast. Roads were cheaper to build and easier to move. The track was lifted and sold for scrap, and the engine shed became a community barn. Second-growth forest filled the hillsides, and the creek, once crowded with log jams, slowly recovered its salmon."
      ],
      [
        "Traces of that era are everywhere if you know where to look. Springboard notches still mark old cedar stumps in the forest above town. Rusty cable and a broken donkey sled lie beside the trail to the lake. The museum has mapped the old rail grade, and hikers can now follow a few kilometres of it on a marked walking route.",
        "The museum has gathered a remarkable collection: a donkey engine whistle, payroll books, crosscut saws, a timekeeper's watch and hundreds of photographs. Volunteers recently restored a short section of track and an old flatcar for display. Plans are underway to add a small shelter so visitors can view the equipment out of the rain, even in the depths of winter."
      ],
      [
        "The museum on {street} is open Thursday to Sunday through the summer and by appointment in the off-season. Volunteers are especially keen to hear from families with photos, letters or tools from the logging years. A guided walk along the old rail grade leaves from the community hall on {date}. Call {phone} for details and meeting times.",
        "To mark the anniversary of the railway's first run, the historical association is hosting an open house on {date} with displays, a short film and a talk by a retired logger. Refreshments will be served in the old engine shed. Donations of photographs or artifacts can be arranged by contacting the curator at {email} or by visiting the museum."
      ]
    ],
    "details": [
      "Locomotive No. {number} (a 2-truck Shay, approx. 42 tons) arrived by scow on {date} and was assigned to the 'Upper Creek' spur, according to company ledger {ref}.",
      "Payroll records from the camp list fallers at {amount} per day, buckers somewhat less, and a cook earning 'board plus wages'; see the museum file labelled {ref2}, folder {number2}.",
      "The trestle over Kettle Creek (approx. {km} north of the wharf) was rebuilt twice after washouts; pilings driven by our contractor, {company}, are still visible at low water, according to a survey dated {date}.",
      "Oral-history interviews with {p2} and {p3} (recorded at the {street} hall on {date2}) describe the whistle codes: two long blasts for 'logs coming', three short for 'stop'.",
      "Estimates suggest the camp shipped {bignumber} cubic metres of timber in its busiest decade; roughly {percent} of it was Douglas fir, with the balance in cedar, hemlock and spruce, towed to mills in {city2}.",
      "Artifacts on loan from {company2} (catalogue No. {ref}, received {date2}) include a crosscut saw (7 ft, 'lance-tooth' pattern), a pike pole and a set of caulk boots worn by a boom man at the bay.",
      "The marked rail-grade trail begins behind the community hall on {street2}, runs approx. {km} to the old water tower, and is closed during high fire-hazard days (e.g. after {date3}).",
      "Curator {p1_title} confirmed the restored flatcar, No. {number2}, was found buried in salal near the lake and moved by flatbed truck at {time} on a quiet Sunday morning."
    ]
  },
  {
    "id": "f05-stargazing-night",
    "kind": "article",
    "title": "A night under the autumn stars",
    "orgs": [
      "{city} Astronomical Club",
      "Dark Sky Observers of {city}"
    ],
    "senderTitles": [
      "Outreach Director",
      "Club Newsletter Editor",
      "Observing Chair"
    ],
    "subjects": [
      "Look up: what to see this season",
      "Star party at the ball field"
    ],
    "sections": [
      [
        "On a clear evening in late autumn, a dozen telescopes stood in a ragged line across the ball field outside {city}. Their owners fussed with eyepieces and red flashlights while families arrived with folding chairs and blankets. By the time the last glow faded from the western sky, a short queue had formed at every scope, and the questions had begun.",
        "There is a moment at every star party when the crowd goes quiet. It usually happens when someone sees the rings of Saturn for the first time and lets out a small gasp. The astronomy club's season-opening night on {date} had plenty of those moments, along with hot cider, cold fingers and a surprisingly clear sky for the time of year."
      ],
      [
        "Club members recommend arriving before dark so your eyes can adjust slowly. It takes about twenty minutes for night vision to develop fully, and a single glance at a phone screen can undo it. That is why volunteers use dim red lights and ask visitors to keep car headlights off once they park. The difference in what you can see is remarkable.",
        "The first rule of the evening is simple: protect your night vision. White light shrinks your pupils, and it takes a long while to recover. Volunteers hand out red cellophane to cover flashlights and phone screens. {p1}, who organized the event, reminds guests to park facing away from the field so arriving drivers do not blind the observers."
      ],
      [
        "Saturn is the crowd favourite this season, sitting fairly low in the south after sunset. Even a small telescope shows the rings as a crisp oval, and sharp eyes can pick out Titan, its largest moon, as a faint dot nearby. Jupiter rises later in the evening, and its four bright moons change position from night to night.",
        "The planets steal the show early in the night. Saturn appears as a small golden disc with its rings tilted just enough to see the gap between ring and planet. Later, Jupiter climbs above the eastern trees, and a modest scope reveals its cloud belts as two thin brown stripes. Watch the moons over a week and you can see them orbit."
      ],
      [
        "Beyond the planets, autumn skies hold some easy deep-sky targets. The Andromeda Galaxy is visible to the naked eye from a dark site as a faint smudge of light. It is more than two million light-years away, so the light reaching your eye left long before there were humans to see it. Binoculars make it easier to find.",
        "For binocular users, the Pleiades star cluster is a treat. Rising in the east by mid-evening, it looks like a tiny dipper made of blue-white stars. With binoculars you can count dozens more. Nearby, the double cluster in Perseus shows two rich clumps of stars side by side, a favourite of club members who like to sweep the sky slowly."
      ],
      [
        "You do not need a telescope to enjoy the night. Find the Summer Triangle still lingering in the west, then follow the Milky Way as it arches overhead. Look for satellites drifting steadily across the stars, and keep an eye out for the occasional meteor. Most visible meteors are grains of dust no bigger than a pea, burning high up.",
        "Some of the best sights need no equipment at all. The Big Dipper swings low along the northern horizon in autumn, and its two pointer stars lead you straight to Polaris. A meteor shower peaks around {date2}, and on a dark night observers may see a dozen or more shooting stars per hour, especially after midnight when the sky is darkest."
      ],
      [
        "Light pollution is the biggest challenge for local astronomers. The glow from parking lots, sports fields and poorly aimed porch lights washes out faint stars. The club has been working with the municipality to switch to shielded, warm-coloured streetlights, which aim light downward. The change saves energy too, and residents nearby often say they sleep better.",
        "The club has spent years encouraging dark-sky friendly lighting. Small changes help: fixtures that point down, warmer bulbs, and motion sensors instead of all-night lights. A few local farms and businesses have already switched over. On a clear night you can now see the Milky Way from the edge of town, something older members say was impossible not long ago."
      ],
      [
        "If you are thinking of buying a first telescope, club members have one strong piece of advice: start with binoculars. A good pair is affordable, portable and teaches you to navigate the sky. When you are ready to move up, a simple reflector on a sturdy mount is often a better choice than a flashy model with a shaky tripod.",
        "Members are happy to talk shop with newcomers. Many began with a small refractor from a garage sale or a pair of binoculars on a camera tripod. The club also has loaner telescopes that members can borrow for a month at a time. Each comes with a short guide, a star chart and a list of objects suitable for beginners."
      ],
      [
        "The next public observing night is planned for {date3}, weather permitting. Bring warm layers, a folding chair and a thermos; it gets colder in an open field than most people expect. If the sky is cloudy, the event moves indoors to the community hall for a talk and slideshow. Updates are posted by four o'clock on the day.",
        "Everyone is welcome at club events, and membership is open to all ages and skill levels. Monthly meetings include a short talk, a sky preview and time to ask questions. New members receive a planisphere and a handbook. To learn more, email the outreach director at {email} or simply show up at the next star party and say hello."
      ]
    ],
    "details": [
      "Observers at the {street} ball field logged a sky-quality reading of 20.8 mag/arcsec2 at {time}; by {time2} high cirrus had lowered it, and the 'deep-sky' queue was paused.",
      "The club's loaner fleet (e.g. an 8-in. Dobsonian, a 102 mm refractor and two pairs of 10x50 binoculars) is managed by {p2}; borrowers sign agreement {ref} and return gear within {number} days.",
      "{p3_title} reported spotting Comet {ref2} as a faint, tail-less smudge near the 'W' of Cassiopeia; confirmation is pending from observers in {city2}.",
      "Approx. {bignumber} visitors attended last season's outreach nights, an increase of {percent}; volunteers handed out {number} red flashlights and roughly as many star charts.",
      "Shielded LED streetlights (3000 K or warmer; full cut-off) installed by our contractor, {company}, along {street2} reduced sky glow noticeably, according to a survey taken on {date2}.",
      "Annual dues are {amount} for individuals and {amount2} for families; members (contact {p1} at {phone}) receive the newsletter 'Eyepiece', access to the dark-sky site and a key to the roll-off observatory.",
      "The club's dark-sky site, approx. {km} west of town on a gravel road off {street2}, is gated after {time}; members must sign in, use parking lights only and avoid the 'no-light' observing pad.",
      "A meteor-count form (columns: time UT, magnitude, radiant, train y/n) should be emailed to {email} by {date3}, or mailed to the clubhouse in {city2}; results will be forwarded to the international meteor database."
    ]
  },
  {
    "id": "f06-christmas-bird-count",
    "kind": "article",
    "title": "The annual Christmas bird count",
    "orgs": [
      "{city} Field Naturalists",
      "Estuary Birders Club"
    ],
    "senderTitles": [
      "Count Compiler",
      "Newsletter Editor",
      "Birding Columnist"
    ],
    "subjects": [
      "Binoculars, notebooks and frosty mornings",
      "Who showed up for the bird count"
    ],
    "sections": [
      [
        "Before sunrise on a cold December Saturday, small groups of people in toques and rain jackets gathered in parking lots around {city}. They carried binoculars, spotting scopes, clipboards and thermoses of coffee. For one full day they would walk, drive and paddle through an assigned patch of countryside, writing down every bird they could see or hear.",
        "Some people celebrate the holidays with shopping or baking. Local birders celebrate by standing in a wet field at dawn, counting ducks. The Christmas bird count is one of the oldest citizen science projects in North America, and our local circle has taken part for many years. This season's count was held on {date}, under low cloud with a light drizzle."
      ],
      [
        "The tradition began more than a century ago as a protest against holiday hunts, when people competed to shoot the most birds in a day. A naturalist suggested counting birds instead. Today thousands of count circles across the Americas take part, each one a circle about twenty-four kilometres across, and the results build a huge, long-term picture of bird populations.",
        "The idea is wonderfully simple. Each count area is a fixed circle on the map, divided into sectors. Teams cover the same sectors every year, so changes in the numbers mean something. Results from all over the continent go into a single database. Scientists use those decades of records to track species that are expanding, shifting north or quietly declining."
      ],
      [
        "Methods are surprisingly careful. Teams record how many hours they spent walking or driving and how many kilometres they covered. Birds are counted individually when possible, and large flocks are estimated in blocks of ten or fifty. Leaders are told to count only what they actually see or hear, not what they expect to find in a familiar spot.",
        "Each team leader keeps a tally sheet, and every bird gets a mark. Flocks of gulls or dunlin are estimated by counting a small group and multiplying across the flock. {p1}, who has compiled the count for {number} years, says the hardest part is avoiding double counts when a flock of geese lifts off one field and lands in the next sector over."
      ],
      [
        "Not everyone has to brave the weather. Feeder watchers count birds from their kitchen windows within the circle and send in their totals. They often contribute species that field teams miss, such as a varied thrush tucked under a hedge or a flock of bushtits working through the backyard. Many families make it a holiday tradition with the children.",
        "Feeder counts are a big part of the day. Residents within the circle spend a few hours watching their feeders and recording the highest number of each species seen at one time. That rule keeps them from counting the same chickadee twenty times. Some feeder watchers report Anna's hummingbirds, which now stay through winter on this coast thanks to backyard feeders."
      ],
      [
        "Every count brings a few surprises. This year one team found a Townsend's solitaire perched on a fence post, well away from its usual mountain haunts. Another group heard a barred owl calling in the middle of the afternoon. The estuary team was delighted by a raft of more than a thousand American wigeon, with a single Eurasian wigeon hidden among them.",
        "Rare birds make the day memorable. A team on the river spotted a white-throated sparrow mixed in with a flock of golden-crowned sparrows, the first record for the count in several years. A feeder watcher photographed an orange-crowned warbler eating suet. Out on the water, a pair of long-tailed ducks bobbed among the scoters, a nice find for the inshore team."
      ],
      [
        "The long-term trends are worth watching. Bald eagles, once scarce, now appear in every sector. Anna's hummingbirds have gone from rare to routine. On the other hand, numbers of some seabirds and grassland birds have dropped. The count cannot always say why, but it raises good questions that researchers can follow up with more detailed studies.",
        "Looking back over decades of results shows clear shifts. Species such as the Eurasian collared-dove have arrived and spread quickly. Wintering waterfowl have moved around as farm fields changed. Some songbirds that used to be common are harder to find. Compilers caution that a single year means little, but long runs of data can reveal real change."
      ],
      [
        "The day ends with a potluck tally, a cheerful gathering where team leaders read out their numbers species by species. Each new bird gets a cheer, and the compiler keeps a running total on a whiteboard. Stories trade around the room: a heron that stole a fish from an otter, a team stuck in mud, a mystery call nobody could identify.",
        "After dark, everyone met at the hall on {street} for chili, bread and the final count. Teams take turns calling out their totals while the compiler checks for duplicates and confirms rare sightings. Photos are passed around on phones. The evening often runs late, and the species total is announced near the end, to friendly groans if it falls short."
      ],
      [
        "New counters are welcome, and beginners are paired with experienced birders. You do not need to know every species; an extra pair of eyes is always useful for spotting movement in the bushes. If you live within the count circle and have a feeder, you can take part from home. Contact the compiler at {email} to be assigned a sector.",
        "Next year's count will be held on the same weekend as usual. Anyone interested in helping can call {phone} to join a team or register as a feeder watcher. Bring warm clothes, a notebook and a good pair of binoculars if you have them. Loaner binoculars are available, and nobody minds if your first try at a gull is a guess."
      ]
    ],
    "details": [
      "The {city} count circle (centre approx. {km} east of the river mouth) recorded {number} species and {bignumber} individual birds on {date}; full results are archived under circle code {ref}.",
      "Team No. {number2} (leader: {p2}) logged 6.5 party-hours on foot and 22 party-km by car; their 'count week' list added a merlin seen near {street} on the day before.",
      "Rare-bird reports must include a written description, e.g. bill shape, wing bars, call notes, and should be sent to {email} by {date2} for review by the regional editor, {p1}.",
      "Feeder watchers on {street2} reported {number} Anna's hummingbirds, a sharp-shinned hawk and a 'possible' Harris's sparrow (not confirmed by {p1_title}; photo too blurry to rule out a white-crowned).",
      "Waterfowl estimates from the estuary sector included approx. {bignumber} American wigeon, with mallard, bufflehead and hooded merganser making up most of the remainder; {p3} handled the scope counts from approx. {time} onward.",
      "The countdown potluck at {street} begins at {time}; please bring a dish to share, your tally sheet (form CB-{number}) and any 'unusual species' forms already filled in.",
      "Bald eagle numbers on the count have risen by approx. {percent} over twenty years (from {number} to {number2} birds); compiler {p1_title} cautions that observer effort also increased over the same period.",
      "A participation fee of {amount} per field counter helps cover the national database; feeder watchers within the circle may take part free of charge if registered by {date3} at {phone}."
    ]
  },
  {
    "id": "f07-coastal-vegetable-garden",
    "kind": "article",
    "title": "Vegetables for a cool, rainy coast",
    "orgs": [
      "{city} Community Garden Association",
      "Westcoast Growers Circle"
    ],
    "senderTitles": [
      "Garden Columnist",
      "Master Gardener",
      "Newsletter Editor"
    ],
    "subjects": [
      "Growing food where it rains a lot",
      "A practical guide for coastal gardeners"
    ],
    "sections": [
      [
        "Gardening on the coast has a reputation for being tricky, and newcomers from the prairies are often surprised. The summers are mild, the winters are wet rather than frozen, and the soil can stay cold and soggy well into May. Once you understand the climate, though, it is possible to harvest something fresh from the garden in almost every month of the year.",
        "Many first-time coastal gardeners plant tomatoes in early May, watch them sulk in the cold rain, and wonder what went wrong. The answer is not that vegetables do not grow here. It is that our seasons work differently. Cool-season crops thrive in this climate, and with a bit of planning even heat lovers can produce a respectable harvest by late summer."
      ],
      [
        "Start with the soil. Heavy rain washes nutrients away and leaves many local soils acidic and low in organic matter. Most gardeners add compost every spring and fall, and a dusting of garden lime every few years helps balance the acidity. Raised beds are popular for good reason: they drain quickly, warm up sooner and are easier to work.",
        "The key is drainage. Clay soils hold water like a sponge, and roots rot when they sit in it all winter. Building raised beds, even simple ones made of untreated cedar, lifts the root zone out of the wet. Fill them with a mix of topsoil and compost, then top them up each year with leaves, seaweed or well-rotted manure."
      ],
      [
        "Choose crops that like cool weather. Kale, chard, peas, lettuce, spinach, leeks and broccoli all do well here. Potatoes and garlic are reliable staples. Varieties bred for northern or maritime climates make a real difference, especially for tomatoes and squash. Seed companies in the region often list days to maturity, which is worth checking before you buy.",
        "Some vegetables seem made for this coast. Garlic planted in October is ready by July. Kale and leeks survive most winters and keep producing until spring. Peas love the cool weather of April and May. {p1}, who runs the plots at the community garden, swears by early, short-season tomatoes grown in containers against a sunny south wall."
      ],
      [
        "Heat lovers need a little help. A simple plastic tunnel over a raised bed can add several degrees, enough to make cucumbers and peppers happy. Black plastic laid over the soil a few weeks before planting warms it up. Many gardeners start tomatoes indoors in March, then move them into an unheated greenhouse in May, hardening them off gradually.",
        "Greenhouses, cold frames and cloches are popular for a reason. They trap a little warmth and, just as importantly, keep the rain off tomato leaves, which helps prevent late blight. Even a hoop house made of plastic pipe and greenhouse film can extend the season by weeks. Ventilation matters though; a closed greenhouse can overheat quickly on a sunny afternoon."
      ],
      [
        "Slugs are the real villains of the coastal garden. They hide under boards and mulch and come out on damp evenings to mow down seedlings. Go out with a flashlight after dark to handpick them, set shallow beer traps, or use iron phosphate bait, which is safe around pets. Copper tape around raised beds can help keep them out.",
        "Every coastal gardener has a slug story. These slimy grazers can clear a row of lettuce in one wet night. Keep the garden tidy, since boards and tall grass give them shelter. Water in the morning rather than the evening so the soil surface dries by nightfall. Ducks, garter snakes and ground beetles are all useful allies in the fight."
      ],
      [
        "Watering seems odd advice for such a wet place, but summers here are often dry. July and August can pass with almost no rain at all. Soaker hoses and drip lines deliver water to the roots without soaking the leaves. A layer of straw mulch keeps the soil cool and moist, and a rain barrel collects free water from the roof.",
        "Despite the rainy reputation, our summers are often dry for weeks at a time. Many gardeners collect winter rain in barrels and tanks for use later in the season. Deep, infrequent watering encourages roots to grow down instead of staying near the surface. A simple finger test works well: if the soil is dry a few centimetres down, it is time to water."
      ],
      [
        "Do not let the garden sit empty in winter. Sow a cover crop such as fall rye or crimson clover in September, then dig it in before spring planting. It holds the soil in place during heavy rain and adds nutrients. Overwintering crops like purple sprouting broccoli and winter cabbage can be planted in late summer for harvest after New Year.",
        "Winter gardening is one of the great advantages of the coast. Plant hardy crops in July and August, and they will keep growing slowly through the cool months. Mulching around carrots and beets lets you dig them from the ground all winter. Many gardeners in {city} still pick kale, leeks and parsnips in January, long after gardens inland are frozen solid."
      ],
      [
        "The community garden association runs a free workshop series each spring, covering soil building, seed starting and pest control. Sessions are held at the garden shed on {street}, and tools and seeds are provided. A seed swap is planned for {date}, so bring extra seeds in labelled envelopes. Contact the association at {email} for a schedule.",
        "If you are new to coastal gardening, consider renting a plot at the community garden. Plots are available in several sizes, and new members are paired with an experienced mentor for the first season. A waiting list opens in January. For more information, call {phone} or drop by on a Saturday morning when volunteers are working in the beds."
      ]
    ],
    "details": [
      "Soil tests from plots No. 12 to {number} showed pH readings of 5.2 to 5.8; the association recommends approx. 2 kg of dolomite lime per 10 sq. m, applied in fall, per bulletin {ref} issued {date}.",
      "Seed potatoes ('Russian Blue', 'Yukon Gold' and 'Sieglinde') ordered through our supplier, {company}, will be available for pickup on {date} at {time}; pre-paid orders total {amount}.",
      "{p2} recorded the last spring frost on {date2} and the first fall frost about {number2} weeks later, giving a frost-free season of roughly 190 days in the lower garden.",
      "Rain-barrel kits (two 200 L food-grade drums, diverter, spigot and overflow hose) cost {amount2} and can be reserved at {phone}; installation help is offered by {p3}.",
      "Members on {street2} reported late blight (Phytophthora infestans) on outdoor tomatoes after a wet week; infected leaves must go in the green-waste bin, not the compost, until {date3}, says {p1_title}.",
      "The association's greenhouse (approx. 4 x 8 m, polycarbonate panels, automatic vent opener) held {number} flats of seedlings by {date2}, about {percent} more than last spring.",
      "Workshop topics include 'Building a Hoop House', 'Slug Patrol' and 'Seed Saving for Beginners'; each session runs approx. 90 minutes, starts at {time2} and is limited to {number} participants per class (fee: {amount}).",
      "Compost from the municipal facility in {city2} tested well for nutrients; members may collect up to {number2} bags each (bring your own containers) during designated hours, Saturdays at {time}."
    ]
  },
  {
    "id": "f08-overnight-sourdough",
    "kind": "article",
    "title": "Overnight bread at the corner bakery",
    "orgs": [
      "{city} Downtown Business Association",
      "Main Street Merchants' News"
    ],
    "senderTitles": [
      "Feature Writer",
      "Newsletter Editor"
    ],
    "subjects": [
      "The starter that never sleeps",
      "How sourdough is made while we sleep"
    ],
    "sections": [
      [
        "At ten o'clock at night, when most of downtown has gone dark, there is still a warm light on in the back of the bakery on {street}. Inside, the radio is playing softly, the mixer is humming, and someone is folding a pale, bubbly dough in a plastic tub. By morning, those tubs will be crusty loaves stacked high on wooden shelves.",
        "Regulars at the corner bakery know the routine. Get there early on a Saturday, because the seeded rye is often gone by ten. What most customers never see is the work that happens long before the doors open. The bread on the shelves started its life the previous afternoon, and much of the real work happens in the quiet hours after midnight."
      ],
      [
        "It all begins with the starter, a living mix of flour and water that holds wild yeast and friendly bacteria. The bakery's starter is older than some of its staff. {p1}, the head baker, feeds it twice a day with fresh flour and water, and it rises and falls in its crock like something breathing slowly in the corner.",
        "Sourdough needs no commercial yeast. Instead, it relies on a starter, a sticky paste that is fed regularly to keep its natural yeasts and bacteria active. The bakery's starter came from a family in {city2} decades ago and has been fed daily ever since. Bakers joke that it is the most important employee in the building, and the only one never late."
      ],
      [
        "In the afternoon, the starter is mixed into a larger batch of flour and water called the levain. A few hours later, when it smells pleasantly sour and has risen into a dome of bubbles, it goes into the main dough with more flour, water and salt. The mix is shaggy at first but smooths out as gluten develops.",
        "Making the dough is a slow business. First the flour and water are combined and left to rest, a step called autolyse that lets the flour soak up water before any kneading. Then the starter and salt are worked in. Rather than heavy kneading, the bakers stretch and fold the dough every half hour, gently building strength without tearing it."
      ],
      [
        "Then comes the long wait. The dough rises slowly at room temperature, and the bakers watch for signs that it is ready: a domed surface, visible bubbles and a slight jiggle when the tub is shaken. Timing changes with the seasons. On warm summer nights the dough moves quickly, while in January it can take hours longer.",
        "Fermentation is where the flavour comes from. As the yeast and bacteria work through the flour, they produce gas that makes the bread rise and acids that give it a gentle tang. The bakers rely on look, smell and touch more than the clock. A good dough feels airy and alive, and it jiggles a little like soft gelatin."
      ],
      [
        "Shaping is done by hand on a floured wooden bench. Each piece of dough is weighed, rounded, then folded into a tight loaf with a smooth skin on top. The loaves go into cloth-lined baskets dusted with rice flour so they do not stick. Racks of baskets then roll into the walk-in cooler to rest overnight.",
        "When the dough is ready, it is divided and shaped by hand. Practised bakers can shape a loaf in a few seconds, tucking and turning it on the bench until the surface is taut. The shaped loaves go into wicker baskets called bannetons and slide into the cooler. The cold slows everything down and deepens the flavour through the night."
      ],
      [
        "Very early in the morning, the deck oven is heated until it glows. Loaves are turned out of their baskets, slashed with a razor blade and loaded onto the hot stone with a long wooden peel. A burst of steam helps the crust stay soft long enough for the bread to rise fully, then crackle and brown as it bakes.",
        "Before dawn the ovens are fired up. Each loaf is flipped onto a peel, scored with a quick slash of a blade and slid onto the baking stone. Steam fills the oven for the first few minutes. When the bread comes out, it sings, a faint crackling sound as the crust cools and tightens. Bakers say it is their favourite noise."
      ],
      [
        "The bakery also tries to waste as little as possible. Day-old bread goes into croutons, bread pudding or a discounted bin by the door. Anything left over at the end of the week is donated to the food bank. Flour comes from a small mill in the province, and the bakers are working with local farmers to try more heritage grains.",
        "The shop has become a gathering place as much as a bakery. Retired loggers meet over coffee at the window table, and children press their noses to the glass to watch the bakers through the kitchen door. Bread that does not sell is shared with a local shelter. Each December, the staff bake hundreds of extra loaves for a holiday fundraiser."
      ],
      [
        "For home bakers, the bakery offers a monthly evening class on sourdough basics. Students leave with their own jar of starter, a recipe card and a loaf they shaped themselves. The next class runs on {date}, and space is limited to keep things hands-on. Call the bakery at {phone} to reserve a spot or ask about private group sessions.",
        "Curious customers can now buy a small jar of the bakery's starter at the till for a few dollars, along with a printed feeding guide. The bakers are happy to answer questions in quieter hours, usually mid-afternoon. The shop opens at seven, closes when the bread runs out, and is closed Mondays so the staff and the starter can rest."
      ]
    ],
    "details": [
      "The overnight schedule for {date} reads: 'Levain built at 2:00 p.m.; final mix at {time}; bulk ferment approx. 4 h at 24 deg. C; shape and retard by {time2}.'",
      "Head baker {p1_title} feeds the starter at a 1:5:5 ratio (starter : flour : water by weight) twice daily, using unbleached flour from our supplier, {company}, under account {ref}.",
      "Each batch of the 'Country Loaf' uses approx. {number} kg of flour, 78% hydration and 2% salt; the bakery on {street2} averages {bignumber} loaves per month across all varieties.",
      "The deck oven (three decks, stone hearth, steam injection) was serviced by our contractor, {company2}, on {date2}; the repair invoice of {amount} was filed as work order {ref2}.",
      "Sourdough classes on {street} cost {amount} per person and include an apron, a banneton, a jar of starter and printed notes; refunds require 48 hours' notice (call {phone}).",
      "Unsold bread is collected nightly by {p2} from the food bank; approx. {percent} of day-old stock goes to the shelter, with the rest turned into croutons or bread pudding by {time}.",
      "Heritage-grain trials with farmers near {city2} included Red Fife, einkorn and spelt; tasting notes ('nutty', 'slightly sweet', 'dense crumb') were recorded by {p3} on sheet No. {number2}.",
      "Customers with allergies should note that sesame, walnuts and rye are handled on the same bench; ingredient lists are posted at the till and updated by {p3} at {phone} before {date3}."
    ]
  },
  {
    "id": "f09-small-boat-safety",
    "kind": "notice",
    "title": "Marine safety notice for small boaters",
    "orgs": [
      "{city} Harbour Authority",
      "Coastal Boating Safety Council of {city}"
    ],
    "senderTitles": [
      "Harbour Manager",
      "Safety Program Coordinator",
      "Wharfinger"
    ],
    "subjects": [
      "Before you leave the dock",
      "Small boat safety: weather, tides and gear"
    ],
    "sections": [
      [
        "With the busy boating season underway, the harbour authority is reminding all small boat operators, paddlers and anglers to plan carefully before heading out. Conditions on this coast can change in less than an hour. A calm morning can turn into a steep, choppy afternoon once the inflow wind picks up, and fog can roll in with little warning.",
        "This notice is for anyone using a small craft in local waters, including kayaks, canoes, aluminum skiffs, sailing dinghies and paddleboards. Over the past season, rescue crews responded to many calls involving boats that were swamped, engines that failed, or paddlers caught by wind far from shore. Most of these situations could have been avoided with better preparation."
      ],
      [
        "Check the marine forecast before every trip, not just the local weather. Marine forecasts give wind speed, wave height and warnings for specific areas. Watch for small craft warnings, which mean winds strong enough to be dangerous for small boats. If a warning is posted, stay in port. The fishing will still be there tomorrow, and so will you.",
        "Weather is the first thing to check. Listen to the continuous marine broadcast on your VHF radio or check the forecast online. Pay attention to wind direction as well as speed, especially where wind blows against the tide, which can raise steep waves quickly. Look at the sky too: a building swell or darkening clouds to the west are signs to turn back."
      ],
      [
        "Tides and currents matter just as much. In narrow passages, the current can run faster than a small boat can travel. Plan your trip so you travel with the current, not against it. Know the times of high and low water, especially if you plan to beach your boat or anchor near rocks that may be exposed or covered as the tide changes.",
        "Learn to read the tide tables. A rising tide can float your boat off a beach while you are exploring, and a falling tide can strand you on a mud flat for hours. Narrow channels near {city} can produce strong currents and whirlpools at peak flow. Time your crossings for slack water, when the current pauses as the tide turns."
      ],
      [
        "Every boat must carry the safety equipment required for its size. For most small boats, this includes a properly fitting lifejacket for each person, a buoyant heaving line, a bailer or manual pump, a sound-signalling device such as a whistle, and navigation lights if you are out after sunset. Check that everything is in good condition before you leave.",
        "Required gear depends on the length of your boat, but the basics are the same for everyone: a lifejacket or personal flotation device for each person on board, something to bail with, a whistle or horn, and a way to see and be seen. Lifejackets only work if you wear them. Most people who drown in boating accidents were not wearing one."
      ],
      [
        "Beyond the legal minimum, the harbour authority strongly recommends carrying a waterproof VHF radio, flares, a first-aid kit, extra warm clothing and drinking water. A cell phone is useful but often has no signal on the water. Keep your phone in a dry bag. A spare paddle or oars can get you home if your motor will not start.",
        "Smart boaters pack for the worst day, not the best. Bring layers of warm clothing, because the water here stays cold even in summer. A handheld VHF radio lets you call for help on channel 16 and hear other boaters nearby. A small toolkit, spare spark plug and extra fuel can turn a breakdown into a short delay instead of an emergency."
      ],
      [
        "Before you leave, tell someone where you are going and when you plan to return. A simple trip plan should include your route, the number of people aboard, a description of your boat and the time to call for help if you have not checked in. Leave it with a friend or family member, not under the seat of your truck.",
        "Always leave a trip plan with someone ashore. Write down where you are launching, where you are going, who is with you and when you expect to be back. If you change your plans, let them know. Search crews in {city2} say a clear trip plan can cut search time dramatically, because they know where to start looking."
      ],
      [
        "Cold water is the hidden danger. If you fall in, the first minute brings a gasp reflex and rapid breathing. Stay calm and focus on your breathing. You then have roughly ten minutes of useful movement before your arms and legs weaken. Get your body as far out of the water as possible, ideally onto your overturned boat.",
        "Even on a sunny afternoon, local waters are cold enough to cause shock. Wearing a lifejacket keeps your head above water while you catch your breath and gives you time to climb back aboard or be found. Practise re-entering your kayak or dinghy in shallow water with a friend. Knowing what to do makes a real difference when it matters."
      ],
      [
        "The harbour authority will host a free safety day on {date} at the public dock, with lifejacket fittings, flare demonstrations and a volunteer rescue crew on hand to answer questions. Courtesy checks of boat equipment will be available all afternoon. For more information, contact the harbour office at {phone} or visit the office on {street} during business hours.",
        "Boaters with questions about required equipment, licensing or local hazards are welcome to stop by the harbour office on {street}. Free lifejacket loans are available for children at the main launch ramp, and loaned jackets can be returned to the drop box by the fuel dock. In an emergency on the water, use VHF channel 16 or call {phone}."
      ]
    ],
    "details": [
      "A small craft warning was in effect for the strait from {time} on {date} until {time2}, with northwest winds of 20 to 30 knots; e.g. waves of approx. 1.5 m were reported off the breakwater.",
      "Lifejackets loaned from the {street} launch ramp must be returned by sunset; {number} children's PFDs (sizes 'infant', 'child' and 'youth') are currently on the rack, inventory file {ref}.",
      "Under the small vessel regulations (summary sheet {ref2}, posted at {street} on {date}), boats up to 6 m in {city} waters require a buoyant heaving line (min. 15 m), a bailer or manual pump, a sound-signalling device and navigation lights after dark.",
      "Current predictions for the narrows near {city2} show a maximum flood of approx. 7 knots on {date2}; slack water is expected at {time} and again roughly six hours later.",
      "{p1}, coordinator of the volunteer rescue station, reports {number2} callouts this season, of which roughly {percent} involved engine failure and most others involved paddlers caught by wind.",
      "Courtesy safety checks at the public dock (no fines issued) will be run by {p2} and a crew from {company} on {date2}; boaters receive a 'Checked' sticker and a list of missing items.",
      "Fuel at the harbour dock is sold at {amount} per litre; the fuel float, located approx. {km} past the breakwater light, is staffed daily from {time} until dusk.",
      "Trip-plan forms (Form TP-{number}) are available at the harbour office on {street2}; they ask for vessel name, hull colour, VHF call sign, number aboard and expected return time by {date3}."
    ]
  },
  {
    "id": "f10-ferry-schedule-planning",
    "kind": "article",
    "title": "How the ferry schedule gets made",
    "orgs": [
      "{city} Island Transport Commission",
      "Inner Islands Ferry Users Committee"
    ],
    "senderTitles": [
      "Communications Officer",
      "Newsletter Editor",
      "Operations Liaison"
    ],
    "subjects": [
      "Behind the timetable on the ferry wall",
      "Tides, crews and the ferry schedule"
    ],
    "sections": [
      [
        "Most of us glance at the ferry timetable on the fridge without thinking about how it got there. Yet every departure time is the result of careful juggling. Schedulers have to balance tides, crew hours, school bells, commuter shifts and the needs of a ship that is, after all, a large and complicated machine that needs regular care.",
        "Ask islanders what they talk about most, and the ferry schedule ranks near the top, usually just after the weather. A missed sailing can mean a missed appointment or a late night at the terminal. To understand why the boat leaves when it does, we spent a morning with the people who plan the timetable for our route between {city} and {city2}."
      ],
      [
        "The tide sets the basic rhythm. At low water, the ramp at the island terminal tilts steeply, and some vehicles, especially long trailers and low sports cars, risk scraping their undercarriages. On the very lowest tides, loading can slow down a great deal. Schedulers check the tide tables months in advance and add extra time to sailings that fall near low water.",
        "The terminal on our side was built decades ago, and the ramp has a limited range. On a big tide, the difference between high and low water can be several metres, which changes the angle of the ramp. Very low tides can make loading difficult and, in rare cases, impossible for heavy vehicles. The schedule leaves room for these slow periods."
      ],
      [
        "Then there are the people who run the ship. Every vessel needs a minimum crew certified for its size, including a captain, a chief engineer and deckhands trained in safety drills. Federal rules limit how many hours each crew member can work. A long day of sailings must be split into shifts, with handovers timed so the boat is never short-staffed.",
        "Crew rules shape the timetable more than most passengers realize. Each sailing needs a full complement of trained people, and their working hours are strictly limited for safety. Schedulers build shifts that fit those limits while matching the busiest times of day. {p1}, who has planned crew rosters for {number} years, calls it a giant puzzle with pieces that move every season."
      ],
      [
        "Commuter and school traffic drives the morning and late-afternoon sailings. The first boat of the day is timed so workers can reach the bus connection on the other side, and the afternoon return is matched to the school day. Weekend schedules shift toward shoppers, visitors and families, with more mid-day sailings and fewer very early ones.",
        "Passenger demand is the third piece of the puzzle. Ferry staff count vehicles and foot passengers on every sailing, and those numbers show clear patterns. Weekday mornings fill with commuters and tradespeople. Friday afternoons bring a rush of weekend visitors. Summer long weekends can overwhelm the schedule, so extra sailings are sometimes added when the boat and crew are available."
      ],
      [
        "Maintenance is the least visible but most important factor. Engines need regular inspections, and the hull must be checked and painted. Smaller tasks happen overnight or between sailings. Bigger jobs, like a dry-dock refit, take the ship out of service for weeks. During that time a relief vessel steps in, often with a smaller capacity and a slightly different schedule.",
        "Every ferry spends part of its life out of the water. Once every few years, the ship goes into dry dock for a major refit: the hull is cleaned and repainted, propellers inspected and safety systems upgraded. Routine work is squeezed into overnight hours. Planners try to schedule refits in the quiet months, usually late fall or winter, when traffic is lightest."
      ],
      [
        "Weather can still throw the plan off. Strong winds, especially from the southeast in winter, may make it unsafe to berth. When that happens, captains may delay or cancel a sailing, and updates are posted online and on the terminal signboard. Schedulers try to build a little slack into the day so one late boat does not ruin every connection afterward.",
        "No timetable survives every storm. When gale warnings are posted, the captain decides whether it is safe to sail, and cancellations are announced as early as possible. Schedulers deliberately leave a buffer of a few minutes in several sailings so a delay in the morning can be absorbed by noon. Fog, too, can slow the ship to a careful crawl."
      ],
      [
        "Public input matters too. Each year the ferry users committee collects comments about the schedule, and many changes start with a suggestion from a passenger. An earlier first sailing on Saturdays, a later last boat on Fridays and better timing with the island bus all came from community feedback. Not every request can be met, but each one is reviewed.",
        "Residents do have a voice in the process. Draft schedules are shared with the ferry advisory committee, which holds public meetings and gathers comments online. The committee has pushed for late sailings for shift workers and better connections with mainland buses. Some ideas work, and others fail because of crew limits or tides, but all are discussed openly."
      ],
      [
        "The new winter timetable takes effect on {date}. Printed copies are available at the terminal and the island library, and the schedule is posted online. Comments on the draft spring timetable can be sent to {email} until the end of the month. A public meeting to discuss the changes will be held at the community hall on {street}.",
        "If you have ideas about the timetable, the users committee meets monthly at the community hall on {street}. Meetings are open to everyone, and there is always time set aside for questions. Service notices, including cancellations and refit dates, can be received by text message by signing up at the terminal office or calling {phone}."
      ]
    ],
    "details": [
      "Tide tables for {date} show a low of approx. 0.3 m at {time}; sailings between {time} and {time2} carry the note 'Ramp angle may restrict overheight and low-clearance vehicles.'",
      "The relief vessel (capacity {number} vehicles, approx. half that of the regular ship) will run the route from {date2} to {date3} while the main ferry is in dry dock at our contractor, {company}.",
      "Crew rostering, managed by {p2} since {date}, follows a 12-hour maximum duty day; e.g. the 'A' crew covers the {time} first sailing, with handover to the 'B' crew at the island terminal by mid-afternoon.",
      "Annual ridership on the route reached {bignumber} passengers, an increase of {percent} over the previous year; Friday afternoon sailings exceeded vehicle capacity on {number2} occasions.",
      "Fares remain at {amount} for a standard vehicle and driver and {amount2} for foot passengers; commuter books (ten one-way trips) are sold at the {city} terminal kiosk only.",
      "Refit work order {ref} lists hull blasting and repainting, propeller polishing, lifesaving equipment recertification and replacement of the No. {number} generator, at a cost of approx. {amount2}.",
      "A southeast gale on {date2} forced the cancellation of {number2} sailings; captain {p3} logged winds of approx. 45 knots at the berth and reported 'unsafe to secure lines.'",
      "Public comments on the draft schedule (file {ref2}) may be submitted to {email} or by phone at {phone}; the advisory committee will review them before the {date3} board meeting."
    ]
  },
  {
    "id": "g01-firefighter-thanks",
    "kind": "letter",
    "title": "Thank-you to a long-serving volunteer firefighter",
    "orgs": [
      "{city} Volunteer Fire Department",
      "North Ridge Fire Protection District"
    ],
    "senderTitles": [
      "Fire Chief",
      "Deputy Chief",
      "Board Chair, Fire Protection Committee"
    ],
    "subjects": [
      "Thank you for your years of service",
      "With gratitude from the {city} hall"
    ],
    "sections": [
      [
        "On behalf of every member of this department, I want to thank you for the years you have given to the people of {city}. When you first signed on, the hall had one pumper, a leaky roof and a pager system that worked only on clear days. You stayed through all of it, and the department we have today was built in large part by people like you.",
        "There is no easy way to measure what a volunteer gives, but I would like to try. You have answered pages in the middle of the night, left family dinners half eaten, and driven to the hall in snow that kept most people indoors. The officers and I talked about it at our last meeting, and we agreed that a proper letter was long overdue."
      ],
      [
        "Many residents will never know your name, but they know what you did. You were on the crew that kept a barn fire on the Hendry property from reaching the house, and you spent most of a winter night pumping water out of flooded basements along {street}. Those are the calls people remember for years, and you were there for both of them.",
        "The call logs tell part of the story. Your name appears on chimney fires, highway collisions, fallen power lines and more than one cat stuck on a roof, which you handled with more patience than anyone else on the crew. You also covered weekday daytime shifts when most volunteers were at work, and that coverage kept our response times steady."
      ],
      [
        "Just as important was the work nobody sees. You checked hoses and air packs every Tuesday night, kept the rescue truck stocked, and quietly fixed the bay door opener when the repair company could not come for two weeks. A hall runs on that kind of steady attention. Without it, the trucks would not roll out of the bay as quickly as they do.",
        "Equipment does not look after itself, and you never treated it as someone else's job. You rebuilt our hose drying rack from scrap lumber, labelled every cabinet in the apparatus bay, and caught a cracked air cylinder before it went back into service. Our inspector from the fire commissioner's office mentioned the condition of the hall twice in the last report."
      ],
      [
        "You have also been a patient teacher. New recruits asked for you by name when they needed to practise knots, ladder raises or pump operations, and several of them told {p1} that you made the training feel possible rather than frightening. At least {number} of our current members learned their basic skills standing next to you on a cold Thursday evening.",
        "Training nights are better when you are there. You have a way of explaining a pump panel or a ladder carry so that it makes sense the first time, and you never made anyone feel slow for asking a second question. Our training officer, {p1}, says that the recruits you mentored are some of the steadiest people we now have on the roster."
      ],
      [
        "Your family deserves thanks as well. Every page you answered meant someone at home was left to finish the evening without you, to keep a plate warm, or to wonder how long a call would run. Please pass along our gratitude to them. Volunteer service is never only the work of one person, and we know that.",
        "We also know your service had a cost at home. Holidays were interrupted, birthday parties were cut short, and the pager went off during more than one hockey game. We are grateful to the people in your life who made room for that commitment and who never once complained to us about the hours."
      ],
      [
        "To mark your years with us, the department will present you with a service plaque and a framed photograph of the crew at our annual awards dinner on {date}. The dinner will be held at the community hall, and a seat has been reserved for you and a guest. We hope you will say a few words, though we will not insist.",
        "The officers would like to recognize you properly in front of the community. We have arranged a presentation at the hall on {date}, with coffee, cake and a short ceremony at {time}. The mayor has been invited, and so have the members who have retired over the past few years. Please feel free to bring anyone you would like."
      ],
      [
        "Even if you step back from active calls, there is still a place for you here. Our public education team could use your help at school visits and the spring safety fair, and the auxiliary always needs people for fundraising barbecues. None of that involves a pager, and all of it would benefit from your experience and good humour.",
        "Stepping back from emergency calls does not mean leaving the department. Several former members now help with our open house, smoke alarm checks for seniors and the toy drive in December. If any of that interests you, just let {p3} know and {p3_he} will add you to the support list. There is no pressure either way."
      ],
      [
        "Thank you again for everything. It has been a privilege to have you on the roster, and the hall will feel different without you on the floor. If you have any questions about the awards dinner or would like to bring more guests, please call me at {phone}. The coffee pot is always on.",
        "Please accept this letter as a small record of a very large contribution. Our door remains open, and you are welcome at the hall any Tuesday night for training or just a visit. If you need anything at all, you can reach me directly at {email}. With thanks from all of us."
      ]
    ],
    "details": [
      "Service records show {number} years of active membership (Badge No. {ref}), with approx. {bignumber} calls attended between the first page in {city} and the most recent mutual-aid call to {city2}.",
      "The plaque reads 'In recognition of faithful service to the {city} Volunteer Fire Department'; it will be presented by {p1} at {time} on {date}, followed by a group photograph on the apparatus floor.",
      "Training records on file: Firefighter Level I (NFPA 1001), pump operator certification, auto extrication, and First Responder (completed in {city2}); the last recertification was signed off by {p2_title} on {date2}.",
      "Note for the auxiliary: catering for the awards dinner (e.g. sandwiches, coffee, sheet cake) has been arranged through our supplier, {company}, at a cost of approx. {amount}, invoice No. {ref2}.",
      "Former members interested in the smoke-alarm program for seniors should contact {p3} at ext. 204 or {email}; visits run Saturdays from {time} to {time2} in the {street} neighbourhood.",
      "Our mutual-aid partners in {city2} have also sent a letter of thanks; their chief noted 'steady, calm work' during the {date} brush fire, which burned approx. {km} of hillside before containment.",
      "A copy of this letter has been placed in your personnel file (ref. {ref}), and a second copy has been forwarded to the regional fire commissioner's office for the long-service medal application due {date3}, attention {p2}.",
      "Parking on the night of the dinner will be available behind the hall at {street}; guests using the side entrance should note that the bay doors will remain closed from {time} until approx. {time2}."
    ]
  },
  {
    "id": "g02-dispatch-retirement",
    "kind": "memo",
    "title": "Retirement of a dispatch supervisor and farewell event",
    "orgs": [
      "{city} Regional Emergency Communications Centre",
      "Mid-Island 911 Dispatch Authority"
    ],
    "senderTitles": [
      "Operations Manager",
      "Director of Communications",
      "Deputy Manager, Dispatch Operations"
    ],
    "subjects": [
      "Retirement of {p1}",
      "Farewell for {p1_first} on {date2}"
    ],
    "sections": [
      [
        "It is with mixed feelings that we share some news with the whole team. {p1}, who has supervised our night shift for many years, has decided to retire at the end of next month. {P1_he} told the management group last week, and asked that everyone hear it from us directly rather than through the break room grapevine.",
        "Staff, please take a moment to read this one carefully. After a long career in this room, our supervisor {p1} has submitted {p1_his} retirement notice. {P1_his} last scheduled shift will be on {date}. Some of you already guessed, given the number of holiday photos on {p1_his} desk lately, but we wanted to make it official."
      ],
      [
        "{P1_he} started here as a call-taker when the centre still used paper run cards and a wall map with coloured pins. Since then {p1_he} has seen us through two computer-aided dispatch upgrades, the move to this building, and the switch to text-to-911. Very few people can say they have answered calls on every console this centre has ever owned.",
        "Most of us first met {p1_first} as the calm voice in the headset during our training shifts. {P1_he} has a gift for spotting when a new call-taker is getting overwhelmed and stepping in without making a fuss. Several of our current supervisors were trained by {p1_him}, and many of the habits we take for granted on the floor started with {p1_his} notes."
      ],
      [
        "Beyond the console, {p1_first} wrote much of our severe weather procedure after the windstorm that knocked out power across the region. That plan has been borrowed by at least two other centres. {P1_he} also pushed hard for the quiet room upstairs, which has become a real help for staff after difficult calls.",
        "{P1_his} work on the floor speaks for itself, but the paperwork matters too. {P1_he} rebuilt our shift handover checklist, cleaned up years of outdated contact lists for tow companies and utilities, and kept the overtime schedule fair during some very short-staffed winters. Those are the jobs nobody thanks you for, so we are thanking {p1_him} now."
      ],
      [
        "To give the team a chance to say goodbye, we are holding a farewell gathering on {date2} at the curling club on {street}. It will start at {time} so that day shift can attend, and we will run it late enough for evening staff to drop in after handover. Dress is casual, and family members are welcome.",
        "A farewell event has been booked for {date2} in the upstairs lounge at the legion hall. Doors open at {time}, with a short presentation about an hour later. There will be finger food, a cash bar and plenty of chairs. Partners and retired staff are invited, and the hall is close enough to walk from the centre."
      ],
      [
        "We know that not everyone can leave the floor, and the phones do not stop for a party. Supervisors will arrange coverage so that people on shift can take a short break to come by. If you are scheduled that evening and want to attend, please speak to your team lead by the end of the week.",
        "Minimum staffing still applies that night, so please do not swap shifts without checking with scheduling first. We have asked two relief call-takers to come in for a few hours so more of the regular crew can step out. Anyone working a console will get at least half an hour to join the celebration."
      ],
      [
        "A card is circulating in the supervisors' office, and there is a collection jar beside it for a group gift. Contributions are entirely voluntary. So far the idea is a good camp chair, a fishing licence, and a framed copy of the old wall map, which {p2} rescued from storage before it was thrown out.",
        "If you would like to contribute to a gift, {p2} is collecting in the lunchroom until {date}. We are keeping the total private and every amount is welcome, including nothing at all. Signing the card matters just as much. A memory book is also on the counter for anyone who wants to write a story or a short note."
      ],
      [
        "On the operations side, {p3} will act as night shift supervisor until the position is posted and filled. The competition will open internally first, and details will go out through the usual job posting board. Please continue to direct schedule questions and equipment problems to the on-duty supervisor, exactly as you do now.",
        "Coverage for {p1_first}'s position is already arranged. {p3} has agreed to fill in on nights while we run the hiring process, which should take about six weeks. Nothing changes for your daily routine. Leave requests, console faults and incident reports go through the same channels, and the on-call manager remains available after hours."
      ],
      [
        "Please join us in thanking {p1_first} for a career spent helping strangers through some of the worst moments of their lives. It is not a small thing. If you have questions about the event or want to help with setup, reply to this memo or call the operations office at {phone}.",
        "We hope to see as many of you as possible at the farewell. Retirements in this field are earned the hard way, through long nights and holiday shifts, and this one is well deserved. Questions about the event can go to {email}, and anyone willing to help decorate should let us know by the end of the week."
      ]
    ],
    "details": [
      "Per the collective agreement (Art. 22.4), {p1}'s final pay, banked overtime of approx. {number} hours and vacation payout will be processed by payroll by {date3}, reference {ref}.",
      "Hall rental for {date2} has been confirmed with our caterer, {company}, for {amount}: includes room, setup, cleanup and a 'light buffet' of sandwiches, vegetables and fruit; bar service is billed separately.",
      "The acting supervisor, {p3}, will hold CAD administrator rights (profile No. {ref2}) from {date} onward; requests for console resets, map layer updates or unit status corrections should go to {p3_him} at ext. 3110.",
      "Retired staff on the alumni list (approx. {number} people) have been invited by email; RSVPs go to {p2} at {email} no later than {date}, noting any dietary needs, e.g. gluten-free or vegetarian.",
      "The internal posting for Supervisor, Night Shift (Competition No. {ref}) will open on {date2}; applicants need a minimum of {number2} years' console experience and current EMD and EFD certifications.",
      "Shift coverage on {date2}: relief call-takers {p2} and {p3} will cover consoles 4 and 6 from {time} to {time2}, allowing regular staff staggered 30-minute breaks to attend the event.",
      "The framed wall map (circa 1990s, approx. {km} of coverage shown at 1:50,000 scale) was restored by our framer, {company2}, for a fee of {amount2}, covered by the social committee.",
      "Parking at {street} is limited to approx. {number} spaces; staff are asked to carpool from the centre or use the overflow lot at the arena, a short walk down the lane behind the hall, or the lot on {street2}."
    ]
  },
  {
    "id": "g03-class-reunion",
    "kind": "email",
    "title": "Planning a 25-year high school reunion",
    "orgs": [
      "{city} Secondary Class Reunion Committee",
      "Harbourview Secondary Alumni Group"
    ],
    "senderTitles": [
      "Reunion Committee Chair",
      "Committee Treasurer",
      "Event Volunteer Coordinator"
    ],
    "subjects": [
      "25-year reunion: venue and RSVPs",
      "Our class reunion, update {ref}"
    ],
    "sections": [
      [
        "Hard as it is to believe, it has been twenty-five years since we threw our caps in the air on the football field. A few of us met for coffee last month and decided it was time to get everyone together again. This email is the first real update, so please read it through and pass it along.",
        "Hello again from the reunion committee. After months of digging through old yearbooks and social media, we have tracked down most of our graduating class. The plan is finally taking shape, and we wanted to share what we know so far before anything is booked for good. Your feedback over the next few weeks really matters."
      ],
      [
        "We looked at four possible venues and narrowed it to two. The first is the golf club on {street}, which has a large patio, its own kitchen and a view of the water. The second is the old school gym, which the district will rent to us on a weekend. One is more comfortable, the other more nostalgic.",
        "For the venue, the committee is leaning toward the banquet room at the community centre in {city}. It holds well over a hundred people, has a stage for a slideshow, and offers plenty of free parking. We also asked about a tour of our old school that afternoon, and the principal said yes, as long as we sign in."
      ],
      [
        "Our tentative date is {date}, a Saturday in the summer when people are more likely to travel. We considered a long weekend, but hotels and flights get expensive then. If that date is a problem for a lot of people, we would rather know now than after we have paid a deposit.",
        "We have pencilled in {date} for the main evening, with a casual picnic at the park the next day for families. That gives people coming from out of province a reason to make a weekend of it. Several hotels in town have offered a group rate if we book a block of rooms early."
      ],
      [
        "Now the part everyone asks about first: cost. Based on catering quotes, we expect tickets to be about {amount} per person. That covers a buffet dinner, room rental, decorations and a photographer for the evening. Drinks will be a cash bar. If we get more people than expected, the price could come down a little.",
        "On money, we are trying to keep things affordable. The current estimate is {amount} a person for dinner, the hall and a DJ who promises to play nothing released after our graduation year. We will open a small fund for anyone who would like to come but finds the ticket price a stretch, no questions asked."
      ],
      [
        "To book the venue properly, we need a rough head count. Please reply with whether you plan to attend and how many guests you will bring. A yes, maybe or no all help. Our deadline for these early replies is {date2}. Formal tickets will go on sale after that, once the numbers are clear.",
        "We are collecting RSVPs through a short online form, and the link is at the bottom of this message. It asks for your name, your name at graduation if it was different, and whether you are bringing a partner. Please fill it in by {date2}, even if the answer is no, so we can stop chasing you."
      ],
      [
        "We are still missing contact details for quite a few classmates. If you are in touch with anyone from our year, please forward this email or send us their address. We would especially like to find the people who moved away right after graduation. A reunion is better when it includes the friends we lost track of.",
        "Help us find the missing. Our spreadsheet still has blanks next to more than {number} names, including several of the band kids and most of the senior basketball team. If you know where any of them ended up, send a note to {p2}, who has taken on the job of tracking people down."
      ],
      [
        "We would also love some help. We need people to collect old photos for a slideshow, organise name tags with graduation pictures, and greet guests at the door. None of these jobs take more than a few evenings. If you are handy with a scanner or just like being busy, please let us know.",
        "Volunteers are welcome for a few small jobs. {p3} is building a slideshow and would like scanned photos from dances, field trips and the grad camping trip, as long as they are flattering. We also need a couple of people to sell raffle tickets and someone willing to bring a guest book."
      ],
      [
        "Thanks for reading this far. We know everyone is busy, and we appreciate any reply, even a short one. If you have questions or ideas, email me at {email} or call {phone} in the evening. It will be good to see everyone again, grey hair and all. Until then, keep an eye on your inbox for the next update.",
        "That is everything for now. Expect another update once the venue is confirmed and the ticket link is live. In the meantime, dig out your old yearbook, have a laugh at the haircuts, and send any questions to {email}. Looking forward to catching up with all of you, and to hearing what everyone has been up to."
      ]
    ],
    "details": [
      "Venue deposit: {amount2} payable to our hall contact, {company}, by {date2}; the balance is due {date3}, and the deposit is non-refundable if we cancel with less than {number} days' notice.",
      "Hotel block at {street}: approx. {number} rooms held under group code '{ref}' at a reduced rate until {date2}; after that date unclaimed rooms return to general inventory.",
      "Ticket price ({amount} per person) includes: buffet dinner, room rental, DJ, photographer and name tags; not included: cash bar, Sunday picnic food, or the optional school tour T-shirt (approx. {amount2}), order code {ref}.",
      "RSVP tally as of {date}: {number} confirmed, {number2} 'maybe', and approx. {bignumber} views of the class Facebook page; {p2} is cross-checking the list against the 'Grad Year' yearbook index.",
      "The school tour runs from {time} to {time2} on {date}; visitors must sign in at the main office, wear a visitor badge, and stay out of the science wing (closed for renovations).",
      "Photographer quote from {company2}: {amount2} for four hours, including approx. {number} edited images delivered online within 30 days; a formal class photo on the front steps is included at no extra charge.",
      "Bursary fund contributions (any amount) can be sent by e-transfer to {email} with the message 'Reunion Fund, {ref2}'; the treasurer, {p3}, will keep all names confidential.",
      "For classmates travelling from {city2} or farther (approx. {km} away), a carpool sign-up sheet is on the form; the ferry schedule for {date} has been posted in the group chat."
    ]
  },
  {
    "id": "g04-theatre-cancellation",
    "kind": "letter",
    "title": "Apology for a cancelled theatre performance",
    "orgs": [
      "{city} Playhouse Society",
      "Tidewater Community Theatre"
    ],
    "senderTitles": [
      "Box Office Manager",
      "Artistic Director",
      "General Manager"
    ],
    "subjects": [
      "Cancelled performance: refunds and new date",
      "Your tickets for {date}, order {ref}"
    ],
    "sections": [
      [
        "We are writing to apologise for the cancellation of the evening performance you had tickets for. We know many people arranged babysitters, booked dinner reservations or drove in from out of town, only to find a sign on the door. That is not the experience we want anyone to have with our theatre, and we are sorry.",
        "Please accept our sincere apology for the cancelled show. You came to the theatre expecting a night out, and instead you were turned away at the lobby. Several patrons told our ushers how disappointed they were, and they were right to say so. This letter explains what happened and what we are doing to make it right."
      ],
      [
        "About an hour before curtain, a water pipe in the ceiling above the stage burst. Water soaked part of the set, the lighting board and the front row of seats. Our technical crew shut off the supply and cleared the stage, but it was not safe to run the electrics or put actors under the damaged ceiling.",
        "Late in the afternoon, our lead actor lost {p1_his} voice completely, and our understudy was at home with a high fever. We tried to find a solution, including having the director read the part from the script, but the cast agreed it would not be fair to an audience paying full price. The decision was made as late as it was because we kept hoping."
      ],
      [
        "We should have told you sooner. Our email to ticket holders went out barely forty minutes before the show, and many people were already on the road. We also did not have enough staff in the lobby to answer questions. We have since changed our procedure so that a cancellation notice goes out by text as well as email.",
        "We also understand the way we communicated made things worse. The notice on our website went up quickly, but not everyone checks a website on the way to the theatre. Going forward, our box office will phone ticket holders directly for any cancellation made on the day, starting with people who bought seats for groups."
      ],
      [
        "You have two choices. You can receive a full refund to the card you used, including the handling fee, or you can exchange your tickets for the rescheduled performance on {date}. If you do nothing, we will hold your seats for the new date. Your original seat numbers will stay the same wherever possible.",
        "The show will go on {date}, and your tickets are automatically valid for that night with the same seats. If the new date does not suit you, we will gladly issue a full refund instead, with no service charge. You can also choose a credit toward any show in our coming season if you would rather keep it."
      ],
      [
        "To ask for a refund, simply reply to this letter, email the box office, or call during our regular hours. Please have your order number handy. Refunds should appear on your card statement within about ten business days, though some banks take a little longer. Cash purchases will be refunded by cheque.",
        "Refunds can be requested at the box office counter, by phone, or online through your account. If you bought tickets as a gift, the person who paid will receive the refund, so you may want to let them know. Please make your request by {date2}, after which we will assume you are keeping the new date."
      ],
      [
        "As a small thank-you for your patience, every ticket holder from the cancelled night will receive a voucher for two drinks or snacks at our lobby bar. The voucher will be included with your confirmation. We know it does not make up for a wasted evening, but we wanted to offer something more than just words.",
        "To make up for the trouble, we are offering everyone affected a pair of complimentary tickets to our staged reading series in the spring. These readings are informal and fun, and they are a good chance to meet the actors afterward. Your voucher code will arrive by email within the next week."
      ],
      [
        "If you had extra costs because of the cancellation, such as a parking fee or a babysitter, we would like to hear from you. We cannot promise to cover everything, but our board has set aside a small fund for exactly this purpose. {p2} in our office will review each request personally and reply within two weeks.",
        "Our board has asked us to review the building's plumbing, wiring and backup plans so this does not happen again. {p2}, our facilities volunteer, is leading that work with help from a local contractor. We will share a short summary in our next newsletter, because we think our audience deserves to know the outcome."
      ],
      [
        "Thank you for supporting live theatre in {city}. Community stages depend on audiences who come back even after a rough night, and we hope you will give us another chance. Questions can be sent to {email}, and the box office can be reached at {phone} from noon until the start of each show.",
        "We value every person who buys a ticket, and we are grateful for your understanding. If there is anything else we can do, please contact the box office at {phone}. We look forward to welcoming you back and to giving you the evening you were promised in the first place."
      ]
    ],
    "details": [
      "Order No. {ref}: {number} tickets, section B, row F, originally for {date} at {time}; now reissued for the same seats on {date2} unless a refund is requested.",
      "Refund amount: {amount} (ticket price plus handling fee), returned to the original payment card; cash buyers will receive a cheque mailed to {street} within approx. {number} business days.",
      "Our restoration contractor, {company}, estimates repairs to the stage ceiling and lighting board at {amount2}; work is scheduled from {date} to {date2}, and the building is insured under policy {ref2}.",
      "Lobby bar voucher (code '{ref}'): valid for two beverages or snacks, e.g. coffee, tea, wine or a cookie; expires {date3}, valid only at {street}, and cannot be exchanged for cash.",
      "Expense claims (parking, childcare, transit) should include receipts and be sent to {p2} at {email} by {date2}; approx. {amount2} has been set aside by the board for these reimbursements.",
      "Doors for the rescheduled performance open at {time}, with curtain at {time2}; the box office at {street} opens one hour earlier for will-call pickups and seat exchanges.",
      "Patrons travelling from {city2} (approx. {km}) may park free in the lot behind the arts centre on {date2}; show your ticket to the attendant, and note the lot closes at midnight.",
      "Accessibility note: wheelchair seating in row A remains available; patrons who need an assisted-listening device should call {phone} at least {number} hours before the show on {date2}."
    ]
  },
  {
    "id": "g05-paramedic-scholarship",
    "kind": "letter",
    "title": "Scholarship award for a paramedic student",
    "orgs": [
      "{city} Community Foundation",
      "Coastal First Responders Education Fund"
    ],
    "senderTitles": [
      "Scholarship Committee Chair",
      "Executive Director",
      "Awards Coordinator"
    ],
    "subjects": [
      "Your scholarship award, file {ref}",
      "Congratulations on your paramedic scholarship"
    ],
    "sections": [
      [
        "Congratulations! I am delighted to tell you that you have been selected to receive this year's emergency services scholarship. The committee read every application carefully, and yours stood out for its honesty and its clear sense of purpose. You should be very proud of the work you put into it.",
        "It gives me great pleasure to let you know that your application for our paramedic scholarship has been successful. We received far more strong applications this year than in any year before, which made the decision difficult. In the end, the committee was unanimous in choosing you, and I am happy to be the one sharing the news."
      ],
      [
        "Your essay about helping your neighbour after {p1_his} fall on an icy driveway stayed with several of us. You described staying calm, calling for help and keeping {p1_him} warm until the ambulance arrived. What impressed us most was that you then asked the crew how you could learn to do more. That curiosity is exactly what this award is meant to support.",
        "The committee was struck by your volunteer record. Coaching junior soccer, delivering groceries for seniors during a winter storm and working weekends at the hospital gift shop all show a steady commitment to people. Your reference from {p1} described you as someone who notices when others need help and does something about it without being asked."
      ],
      [
        "The award is worth {amount} and will be paid directly to your college in two instalments, one for each semester of your first year. The money can be used for tuition, textbooks or required equipment such as uniforms and a stethoscope. It does not need to be repaid, and it does not affect any student loans you may receive.",
        "This scholarship provides {amount} toward your first year of study. Half will be sent to the college at the start of the fall term and half in January, once we receive confirmation that you are still enrolled. If your program has costs the college does not bill directly, such as a criminal record check or immunisations, please let us know."
      ],
      [
        "To accept the award, please sign and return the enclosed form by {date}. We will also need a copy of your letter of admission and your student number. If anything is unclear, our office is happy to walk you through it. Most students finish the paperwork in a single afternoon.",
        "Before we can release any funds, we need three things: the signed acceptance form, proof of enrolment in the primary care paramedic program, and a short photo for our annual report. Please send these by {date}. If you would rather not have your photo published, just tell us and we will respect that."
      ],
      [
        "We would also love to celebrate with you in person. Our awards evening will take place on {date2} at the foundation office, and you are welcome to bring two guests. There will be a brief presentation, a few speeches and light refreshments. Recipients are asked to say a sentence or two, but nothing formal is expected.",
        "Each spring we hold a small reception to introduce our new award recipients to the donors who make the scholarships possible. This year it will be on {date2}, at the library meeting room in {city}. Many donors are retired paramedics and nurses, and they enjoy hearing about your plans. Please bring family if you like."
      ],
      [
        "This scholarship was created by the family of a paramedic who served in this region for more than thirty years. They wanted to help young people from small communities get the same training {p2_he} did. Each year they read the recipient's essay, and they have asked us to pass along their warmest congratulations.",
        "The fund behind your award was started by a group of local ambulance crews who held pancake breakfasts and raffles for years to build it. Today it is supported by hundreds of small donors across the island. They are not looking for anything in return, other than knowing their gift is helping a future colleague."
      ],
      [
        "Paramedic training is demanding, with long clinical shifts and a lot to learn in a short time. If you ever find yourself struggling, please reach out. We can connect you with a mentor who has been through the program, and that person will understand the challenges better than most. Asking for help is part of the job.",
        "We like to stay in touch with our recipients. During the year, {p3} from our committee may check in by email to see how your studies are going. We would also appreciate a short update at the end of the year, just a few lines about what you learned and what you enjoyed most."
      ],
      [
        "Once again, congratulations. We are excited to see where this path takes you, and we hope one day to hear that you are working on an ambulance crew close to home. If you have questions, please call me at {phone} or email {email}. Our office is open weekdays, and we always return messages within a day or two.",
        "On behalf of the whole committee, well done. We look forward to meeting you at the reception and following your progress through the program. Please do not hesitate to contact our office at {email} if you need anything at all along the way. We are very proud to have you as part of our scholarship family."
      ]
    ],
    "details": [
      "Award details: Scholarship No. {ref}, value {amount}, paid in two instalments of equal value to the registrar's office on or about {date2} and {date3}; funds are not transferable to another program.",
      "Required documents: signed acceptance form, copy of admission letter, student ID number, and a void cheque (only if funds are to be paid directly to you); send to {p3} at {email} by {date}.",
      "The reception begins at {time} on {date2} at {street}; light refreshments (e.g. coffee, sandwiches, cake) will be served, and the presentation is expected to wrap up by approx. {time2}.",
      "Eligible expenses include tuition, textbooks, uniform, boots, a stethoscope, CPR-HCP recertification, and practicum travel of more than {km} from home; receipts over {amount2} should be kept on file until {date3}.",
      "Recipients must maintain full-time enrolment and a minimum GPA of 2.5 (approx. {percent}) in the PCP program at our partner college, {company}, through {date3}; failure to do so will pause the second instalment.",
      "This year the foundation reviewed {number} applications from {city}, {city2} and smaller communities; total awards granted were {number2}, for a combined value of approx. {amount2}.",
      "Mentorship program: recipients are paired with a working paramedic (BC Emergency Health Services, Station No. {ref2}); the first meeting is usually arranged within {number} weeks of the start of term, coordinated by {p3}.",
      "Taxes: under current CRA rules, most scholarship income for full-time students is exempt; a T4A slip (reference {ref}) will be mailed to {street} in February for your records; questions go to {email}."
    ]
  },
  {
    "id": "g06-seniors-housing-welcome",
    "kind": "letter",
    "title": "Welcome package for new seniors' housing tenants",
    "orgs": [
      "{city} Seniors Housing Society",
      "Arbutus Grove Independent Living"
    ],
    "senderTitles": [
      "Resident Services Manager",
      "Tenant Relations Coordinator",
      "Building Manager"
    ],
    "subjects": [
      "Welcome to your new home",
      "Your move-in package, suite {ref}"
    ],
    "sections": [
      [
        "Welcome to your new home. Everyone here, from the front desk to the maintenance crew, is glad you have joined us. Moving is tiring at any age, so we have put together this package to answer the questions most new tenants ask in their first few weeks. Please keep it somewhere handy, perhaps beside the phone.",
        "On behalf of the staff and residents, it is a pleasure to welcome you to the building. We hope your move went smoothly and that the boxes are starting to disappear. This letter covers the practical things you will need to know, such as keys, mail, meals and who to call, so you can settle in without guesswork."
      ],
      [
        "Your keys open the front entrance, your suite door, your mailbox and the storage locker assigned to you. The fob on the ring works on the side door and the elevator after hours. If you lose a key or fob, please tell the office right away so we can deactivate it. Replacements are made on site.",
        "You should have received a key for your suite and mailbox, plus a fob for the main doors. The front door locks automatically at {time} each evening, and visitors after that time will need to call your suite from the panel in the lobby. Please do not prop doors open, even for a moment, because it affects everyone's security."
      ],
      [
        "Every suite has an emergency pull cord in the bathroom and the bedroom. Pulling either one sends an alert to the monitoring company, which will call your suite and, if there is no answer, send help. Please test your cords with staff during your first week so you know exactly how they work and how loud the signal is.",
        "Safety matters a great deal in a building like ours. The fire alarm is tested on the first Monday of each month at ten in the morning, so do not be alarmed by the bells. Evacuation maps are posted by every elevator, and our annual fire drill is held in the fall with plenty of advance notice."
      ],
      [
        "The dining room serves lunch and dinner every day. Your monthly rent includes one main meal, and additional meals can be added to your account at the front desk. Menus are posted on Fridays for the following week. If you have allergies or a special diet, please speak with {p2} in the kitchen, who is happy to adjust.",
        "Hot lunch is served at noon in the dining room, and many residents say it is the best way to meet neighbours. You are not required to attend, and you are always welcome to cook in your own suite. Our cook, {p2}, posts the weekly menu by the mailboxes and takes requests, within reason."
      ],
      [
        "There is plenty to do if you want to join in. The activity calendar includes chair yoga, a Tuesday card game, a book club and a weekly bus trip to the grocery store. Our garden committee grows tomatoes and beans in the raised beds out back and is always happy to welcome another pair of hands.",
        "Our recreation room has a piano, a large-print library and a jigsaw puzzle that is never quite finished. Residents also run a walking group that meets in the lobby on weekday mornings. A shuttle goes to the shopping centre in {city} on Thursdays. Sign-up sheets for all of these are on the board outside the office."
      ],
      [
        "If something in your suite needs repair, such as a dripping tap or a light that will not turn on, fill out a request form at the front desk or call the office. Most small jobs are fixed within two working days. For urgent problems after hours, like a leak or no heat, use the on-call number on the back of your door.",
        "Maintenance requests can be left in the box by the mailroom or phoned in to the office. Our caretaker, {p3}, does rounds every weekday morning and will knock before entering any suite. If a repair needs an outside contractor, we will give you at least a day's notice before anyone comes in."
      ],
      [
        "Rent is due on the first of the month and can be paid by cheque, pre-authorised debit or at the office. Guests may stay with you for up to two weeks at a time. Pets are welcome under our pet policy, which is attached. Please read the tenancy rules section when you have a quiet moment.",
        "A few house rules help everyone get along. Quiet hours run from ten at night until seven in the morning. Smoking is not permitted anywhere in the building or on balconies. Laundry rooms are open from early morning until evening, and residents are asked to remove their clothes promptly so others can use the machines."
      ],
      [
        "We hope you will feel at home here very soon. Please drop by the office anytime with questions, or simply to say hello. You can reach us at {phone} during office hours, and our door is usually open. Welcome once again, and we hope the first few weeks bring new friends and a good night's sleep.",
        "Thank you for choosing to live with us. In the coming weeks, a resident volunteer will stop by to introduce themselves and show you around. In the meantime, you can reach the office at {email} or {phone}. We are very glad you are here, and we look forward to getting to know you better over coffee."
      ]
    ],
    "details": [
      "Suite No. {ref}, storage locker {number}, parking stall (if assigned) {number2}; your tenancy began {date}, and the first rent payment of {amount} is due on the first of next month.",
      "Emergency pull cords connect to our monitoring provider, {company}; if an alert is triggered, staff or a responder will arrive within approx. {number} minutes, and an incident note will be filed under {ref2}.",
      "Meal plan add-ons: additional lunches cost {amount2} each, billed monthly to your account; guest meals must be ordered at the front desk by {time} on the day before, or by phone at {phone}.",
      "The Thursday shuttle leaves the main entrance at {time} for the shopping centre in {city2} (approx. {km}) and returns by {time2}; seats are limited to {number} riders, first come, first served.",
      "Key and fob replacement fees: suite key {amount}, fob {amount2}; lost fobs are deactivated immediately in the access system, and a new one can be issued at the office on {street}.",
      "Pet policy (Schedule C) allows one cat or one small dog (under approx. 10 kg) per suite; proof of vaccination and a signed pet agreement must be provided to {p2} at {street} by {date2}.",
      "Annual fire drill: {date3} at {time}, led by {p3}; residents who need help on stairs should register with the office so that a 'buddy' can be assigned during evacuations and real alarms.",
      "Contacts: office {phone} (weekdays), maintenance after hours via the on-call line, caretaker {p3} at ext. 12, and resident council chair {p1} for social events or concerns."
    ]
  },
  {
    "id": "g07-charity-fun-run",
    "kind": "notice",
    "title": "Charity fun run route, registration and road closures",
    "orgs": [
      "{city} Harbour Run Committee",
      "Kinsmen Family Fun Run Society"
    ],
    "senderTitles": [
      "Race Director",
      "Event Coordinator",
      "Volunteer Manager"
    ],
    "subjects": [
      "Charity fun run on {date}",
      "Fun run road closures and registration"
    ],
    "sections": [
      [
        "Lace up your shoes. Our annual charity fun run returns on {date}, and this year every dollar raised will go toward new equipment for the children's ward at the regional hospital. Runners, walkers, strollers and dogs on leashes are all welcome. You do not need to be fast to take part, just willing to have a good morning.",
        "The community fun run is back for another year, and we hope you will join us. Proceeds will support the local food bank, which has seen record demand this winter. Whether you plan to race for a personal best or stroll with the family, there is a distance for you, and a free pancake breakfast waiting at the finish."
      ],
      [
        "There are two routes this year. The five-kilometre loop starts at the waterfront park, follows the seawall to the marina and comes back along {street}. The ten-kilometre route adds a section through the trails behind the high school. Both courses are mostly flat and well marked, with water stations about every two kilometres.",
        "Participants can choose a short family route or a longer route for more experienced runners. The family route stays on paved paths around the lagoon and is suitable for strollers and wheelchairs. The longer route climbs gently up {street} before dropping back toward the harbour. Course maps are posted at the library and the community centre."
      ],
      [
        "Registration is open now online and at the recreation centre front desk. Adults pay {amount}, while children under twelve run for free with a registered adult. Everyone who registers by {date2} receives a T-shirt in their size. Late registration on race morning is possible, but shirts will be given out only while supplies last.",
        "To register, visit our website or pick up a paper form at the sporting goods store downtown. The entry fee is {amount} for adults, and families of four or more can sign up for a reduced group rate. Teams from workplaces and schools are encouraged, and the team that raises the most money wins a trophy and bragging rights."
      ],
      [
        "On race day, kit pickup opens early at the park pavilion. Please bring your registration confirmation, either printed or on your phone. The ten-kilometre runners start first at {time}, followed by the five-kilometre group fifteen minutes later. A short warm-up led by a local fitness instructor begins just before the first start.",
        "Please arrive at least half an hour before your start to collect your bib and timing chip. The start line is beside the bandstand, and runners will line up by expected finish time, with walkers at the back. Bag check is available, but please leave valuables at home. The first group heads out at {time}."
      ],
      [
        "Several streets will be closed to traffic during the run. {street} will be closed between the marina and the park from early morning until about noon. Residents along the route can still leave their homes, but may have to wait for a gap between runners. Traffic control volunteers will help drivers get through safely.",
        "Drivers should expect delays near the waterfront. Parts of {street} will be closed for several hours, and on-street parking along the course will not be allowed that morning. Signs will go up a few days in advance. Transit buses will be detoured for the morning, and updated stops will be posted at the affected shelters."
      ],
      [
        "We need about {number} volunteers to make the day work. Jobs include handing out water, cheering at corners, directing traffic with marshals, flipping pancakes and handing out medals at the finish line. Volunteers get a T-shirt, breakfast and our sincere thanks. Students can count their hours toward school volunteer requirements.",
        "Volunteers are the backbone of this event. We are looking for course marshals, water station crews, a few people to help with setup and teardown, and someone patient to run the lost and found. Most shifts are three hours long. Please sign up with {p2}, who will send out assignments and a short safety briefing a week before."
      ],
      [
        "First aid will be provided by a team of trained volunteers stationed at the start, the finish and the halfway point. Runners are asked to know their limits and to stop at any aid station if they feel unwell. If the weather is extremely hot or stormy, we may shorten the course, and updates will be posted online.",
        "Safety is always our first concern. A first aid tent will be set up beside the finish line, and a cyclist with a radio will follow the last participants on each course. Please keep dogs on short leashes and stay to the right so faster runners can pass. Headphones are allowed, but keep the volume low."
      ],
      [
        "Thank you to our sponsors, our volunteers, and to the neighbours who put up with a noisy Sunday morning. For questions about registration, call {phone}. For volunteer information, email {email}. We will see you at the start line, whether you plan to sprint, jog, walk or simply cheer from the sidelines with a coffee in hand.",
        "We are grateful to everyone who makes this run possible, from local businesses to the families who cheer from their driveways. If you have questions about the route or road closures, please call {phone}. See you on race morning, rain or shine. Bring a friend, bring your dog, and bring your appetite for pancakes."
      ]
    ],
    "details": [
      "Road closures on {date}: {street} (marina to park) from {time} to approx. {time2}; {street2} (school entrance to trailhead) from 7:30 a.m. to 11:00 a.m.; local access only, with flaggers on site.",
      "Registration fees: adults {amount}, youth 12-17 {amount2}, children under 12 free; group rate for {number} or more; online registration closes {date2} at midnight (Event ID {ref}).",
      "Timing by our chip provider, {company}: results will be posted at the finish within approx. {number} minutes and online by {date2}; disputes must be submitted with your bib No. to {email}.",
      "Course details for {date}: 5 km loop starting near {street}, (flat, paved, stroller-friendly) and 10 km route ({ref}; approx. {km} of packed gravel trail, gentle grade); water stations at the 2, 4, 6 and 8 km marks.",
      "Volunteer shifts: setup 6:00-9:00 a.m., course marshal {time}-{time2}, teardown 11:30 a.m.-2:00 p.m.; all marshals must attend a 20-minute briefing with {p2} on {date}.",
      "Transit Route No. {number} will detour via {street2} from 6:30 a.m. until roads reopen; temporary stops are marked with orange 'Event Detour' signs, per BC Transit notice {ref2}.",
      "Last year's run drew approx. {bignumber} participants and raised {amount}; this year's goal is {amount2}, with matching donations from our sponsor, {company2}, up to a set limit.",
      "Lost and found will be held at the park pavilion until 1:00 p.m., then moved to the recreation centre at {street}; items not claimed by {date3} will be donated to a local thrift shop; call {phone} to ask."
    ]
  },
  {
    "id": "g08-wedding-vendors",
    "kind": "email",
    "title": "Wedding vendor coordination and rain plan",
    "orgs": [
      "Saltwater and Cedar Wedding Planning",
      "{city} Event Co-ordination Studio"
    ],
    "senderTitles": [
      "Wedding Planner",
      "Event Coordinator",
      "Day-of Coordinator"
    ],
    "subjects": [
      "Vendor timeline and rain plan",
      "Wedding day update, booking {ref}"
    ],
    "sections": [
      [
        "With just a few weeks to go, I wanted to send one email that pulls together everything the vendors need for the wedding day. I have copied the florist and the photographer on this message so we are all reading from the same page. Please look it over and let me know if anything does not match your notes.",
        "Hello everyone, and thank you for your patience while we pinned down the final details. This message covers the timeline, setup times, the photo list and what happens if the weather turns. I know you are all busy with other events, so I have tried to keep it practical and to the point."
      ],
      [
        "The ceremony is planned for the lawn above the beach at {time}, with the reception in the barn afterward. The couple would like guests seated about twenty minutes before the start, so music and ushers should be ready earlier. Dinner service begins after cocktails, and speeches will run between the main course and dessert.",
        "Here is the basic shape of the day. Guests arrive at the orchard on {street} in the early afternoon. The ceremony starts at {time} under the old apple tree, and it should take about half an hour. Cocktails and lawn games follow, then dinner in the tent, speeches, first dance and an open dance floor."
      ],
      [
        "For the florist: the arch arrangement should be in place at least two hours before the ceremony, and the table centrepieces can go in once the caterers finish setting the tables. The couple has asked for local greenery and as few lilies as possible, since one of the grandparents has allergies. Bouquets go to the bridal suite.",
        "Florals will need to arrive in two drops. Personal flowers, meaning bouquets, boutonnieres and the flower crowns for the two young flower girls, go to the house where the wedding party is getting ready. Everything else, including the ceremony arch and the long garland for the head table, goes directly to the venue."
      ],
      [
        "For the photographer: the couple sent a list of must-have group shots, which I have attached. They would like a short portrait session on the dock during golden hour, roughly forty minutes before sunset. One request is to keep family photos quick, about twenty minutes, so guests are not left waiting too long for dinner.",
        "Photography notes: getting-ready coverage begins at the house around midday. The couple has chosen to see each other privately before the ceremony, so please plan a first-look spot near the garden gate. The group photo list is attached. {p2} from the wedding party will help gather relatives so things move quickly."
      ],
      [
        "Now the rain plan. If the forecast shows a real chance of showers by noon on {date}, I will make the call and let everyone know by text. The ceremony would move into the barn, with chairs set up at the far end. The arch would come inside, and the florist should bring extra stands in case it needs support.",
        "If it rains, we will hold the ceremony under the tent instead of on the lawn. The tent company has agreed to install sidewalls and extra heaters on short notice. I will confirm the decision the morning of the wedding. Photographers, please scout a covered spot for portraits, such as the covered porch or the barn doorway."
      ],
      [
        "Parking for vendors is behind the barn, and the side road is the easiest way in with a loaded van. Please do not use the main lane during the ceremony window, because guests will be walking up it. There is a small prep room with power and a sink for anyone who needs it.",
        "Load-in for vendors is through the gate at the back of the property. The ground can get soft after rain, so park on the gravel pad rather than the grass. Power is available near the tent, but please label your cords. Snacks and water will be set out for vendors in the kitchen during dinner."
      ],
      [
        "Final payments are due on {date2}. Please send your invoices directly to the couple and copy me so I can confirm that everything has been received. If your contract includes overtime, let me know the hourly rate now, because the reception may run a little later than planned if the dance floor stays busy.",
        "On the business side, please send me your final invoice and certificate of insurance before {date2}. The venue insists on proof of liability coverage for every vendor working on site. If any of your staff have changed since you signed the contract, please update me with their names so the gate attendant can check them in."
      ],
      [
        "Thank you all for being part of this. The couple has been planning for a long time, and they are thrilled with the team they have chosen. My cell on the day is {phone}. Reply here with any questions, and I will update the shared timeline so everyone has the latest version.",
        "I am excited to work with all of you on this one. Please confirm by reply that you have read this email and that the times work. My phone is {phone} if you need me on the day, and anything less urgent can go to {email}. Thanks again for all your hard work."
      ]
    ],
    "details": [
      "Timeline for {date}: vendor load-in from {time}, ceremony at {time2}, cocktails and photos to follow; dinner service approx. 90 minutes later; last song and sparkler exit by 11:00 p.m. sharp (noise bylaw).",
      "Florist order (invoice {ref}): 1 ceremony arch, {number} centrepieces, 2 bridal bouquets, 6 boutonnieres, 2 flower crowns, and a 3-metre cedar garland; balance of {amount} due {date2}.",
      "Photographer package from our vendor, {company}: 8 hours coverage, second shooter, online gallery of approx. {number2} edited images; overtime billed at {amount2} per hour after 10:00 p.m.",
      "Rain plan decision: final call by noon on {date}; our tent supplier, {company2}, will install sidewalls and two propane heaters (approx. 4 hours notice required), contract No. {ref2}.",
      "Vendor parking: gravel pad behind the barn at {street}; please avoid the main lane between {time} and {time2}, when guests are arriving and the shuttle from {city} is running.",
      "Certificate of insurance (minimum $2,000,000 general liability) must name the venue as 'additional insured'; send a copy to {email} by {date2}, quoting booking reference {ref}.",
      "Shuttle service: two 24-seat buses departing the hotel in {city2} at {time} (approx. {km} each way); the last return trip leaves the venue at midnight and is included in the couple's budget.",
      "Dietary notes for vendor meals: {number} vegetarian, 1 gluten-free, 1 nut allergy (EpiPen on site with {p3}); headcount confirmed {date2}; meals will be served in the farmhouse kitchen during the first course."
    ]
  },
  {
    "id": "g09-credit-union-agm",
    "kind": "notice",
    "title": "Annual general meeting notice for a credit union",
    "orgs": [
      "{city} and District Credit Union",
      "Island Shores Savings Credit Union"
    ],
    "senderTitles": [
      "Corporate Secretary",
      "Chair, Board of Directors",
      "Member Relations Manager"
    ],
    "subjects": [
      "Notice of annual general meeting",
      "Members' AGM on {date2}"
    ],
    "sections": [
      [
        "Notice is hereby given to all members that the annual general meeting of the credit union will be held on {date2}. As a member-owned financial co-operative, we rely on members to elect the board, approve key decisions and hold us accountable. This meeting is your opportunity to do exactly that, and we hope you will take part.",
        "Every year, members gather to review how the credit union has performed and to vote on its future. This year's annual general meeting will take place on {date2} at {time}. Unlike a bank, a credit union is owned by the people who use it, and each member has one vote, no matter how much money is on deposit."
      ],
      [
        "The meeting will be held in the main hall of the community centre on {street}. Doors open thirty minutes early for registration. Members may also attend online through a secure video link, which will be emailed to anyone who registers in advance. Online participants will be able to ask questions and vote in real time.",
        "This year we are offering a hybrid meeting. You can attend in person at the hotel conference room on {street}, or you can join from home by computer or phone. Coffee and light refreshments will be served at the venue. Members who need a ride or other accommodation should call the branch at least a week before."
      ],
      [
        "The agenda includes the call to order, adoption of last year's minutes, the reports of the board chair and chief executive officer, the presentation of the audited financial statements and the auditor's report. Members will then vote on the appointment of the auditor for the coming year and on the election of directors.",
        "Items on the agenda include approval of the previous meeting's minutes, a review of the year's financial results, the report of the credit committee and the election of three directors. A special resolution to update the rules on member eligibility will also be presented. The full agenda and supporting documents are available at every branch."
      ],
      [
        "Three positions on the board of directors are up for election this year. The nominating committee has reviewed all candidates to make sure they meet the qualification requirements. Candidate biographies and short statements are posted on our website. Members are encouraged to read them before voting and to ask candidates questions during the meeting.",
        "This year, five candidates are running for three open director positions. Each director serves a three-year term. Candidates were reviewed by the nominating committee and all meet the eligibility rules. Their statements, describing their background and goals for the credit union, are included in the information package sent with this notice."
      ],
      [
        "Advance voting for directors will be open at all branches and online from {date} until the day before the meeting. Members who vote in advance may still attend the meeting but will not vote again on the director election. Votes on resolutions raised at the meeting must be cast by members present in person or online.",
        "To vote, you must be a member in good standing, at least sixteen years of age, and have held your membership for at least ninety days before the meeting. Advance polls open on {date}. Please bring photo identification when voting at a branch. Joint account holders who are separate members may each cast a vote."
      ],
      [
        "For the meeting to proceed, a quorum of members must be present, either in person or online. If quorum is not reached within thirty minutes of the scheduled start, the meeting will be adjourned to a later date. Previous meetings have struggled to meet this number, so every member who attends makes a real difference.",
        "Under our rules, business cannot be conducted unless a quorum is present. Members attending online count toward quorum once they have logged in and confirmed their membership number. If you plan to attend, please register early online or at your branch so we can estimate numbers and arrange enough seating, microphones and support staff."
      ],
      [
        "A special resolution requires approval by at least two-thirds of the votes cast. The resolution this year would allow the board to hold future meetings entirely online if needed during an emergency. The full text of the resolution and the board's reasons for recommending it are printed in the information package.",
        "The board will also report on the results of the member survey conducted earlier in the year. Many members asked for longer branch hours on Saturdays and better mobile banking features, and management will outline what has been done in response. There will be time for open questions at the end of the meeting."
      ],
      [
        "Thank you for being a member. If you have questions about the meeting, voting or the information package, please call member services at {phone} or email {email}. We look forward to seeing you there. Coffee will be ready early, and staff will be on hand to help with registration, ballots and any questions about your account.",
        "Your participation helps shape the credit union for years to come. For more information or to register for online attendance, please contact {p1}, our corporate secretary, at {phone}. Copies of this notice are also available at every branch counter. Large-print versions can be mailed on request, and staff will gladly answer questions about how to vote."
      ]
    ],
    "details": [
      "Meeting details: {date2} at {time}, main hall, {street}; registration opens at approx. {time2}, and online participants must log in by the start time using their member No. and access code.",
      "Quorum under Rule 8.3 of the rules of {org} is {number} members present in person or online; if quorum is not reached, the meeting will be adjourned to {date3} at the same time and place.",
      "Advance voting runs from {date} to the day before the meeting at all branches in {city} and {city2}; online ballots require your membership number and a one-time code sent by SMS.",
      "Audited financial statements for the year ended December 31 were prepared by our external auditor, {company}; total assets were approx. {amount} and net income was {amount2}, a change of {percent} year over year.",
      "Special Resolution No. {ref}, moved by {p1} and seconded by {p2}: 'to amend Rule 12 to permit fully electronic general meetings'; approval requires at least two-thirds (approx. 66.7%) of votes cast by eligible members, per the Credit Union Incorporation Act.",
      "Director candidates (listed alphabetically): {p1}, {p2}, {p3} and two others; biographies are posted on the website and at every branch, and a candidates' forum will be held on {date} at {time}.",
      "Members needing accommodation (e.g. hearing assistance, large-print materials, transportation) should contact member services at {phone} or {email} by {date}, quoting reference {ref2}.",
      "As of {date}, the credit union had approx. {bignumber} members and {number} branches across the region; the full annual report will be available from the branch at {street} two weeks before the meeting."
    ]
  },
  {
    "id": "g10-museum-photo-donation",
    "kind": "letter",
    "title": "Museum acknowledgement of a family photograph donation",
    "orgs": [
      "{city} Museum and Archives",
      "Comox Valley Heritage Society"
    ],
    "senderTitles": [
      "Curator",
      "Archivist",
      "Collections Manager"
    ],
    "subjects": [
      "Your donation of family photographs",
      "Acknowledgement of gift, accession {ref}"
    ],
    "sections": [
      [
        "Thank you for donating your family's photograph collection to the museum. When the boxes arrived, our staff gathered around the work table to look through the first few albums, and it took us most of the afternoon to put them down. Collections like this one are rare, and we are honoured that you trusted us with it.",
        "On behalf of the board and staff, I would like to acknowledge with deep gratitude your gift of historical photographs. Many families keep old pictures in a closet for decades, and many more are lost when a house is cleared out. You chose to share yours with the whole community, and future researchers will be thankful for that decision."
      ],
      [
        "The collection includes glass plate negatives, cabinet cards and several albums covering the early years of the farm, the sawmill and the first school in the valley. We were especially pleased to find photographs of the steamship landing, which we had only seen described in old newspapers. Some images show buildings that no longer exist.",
        "Among the photographs are images of a logging camp in winter, a church picnic on the beach, and a rare view of the main street before the fire that changed the town. There are also family portraits taken by a travelling photographer, with the studio name stamped on the back. Each one tells us something new."
      ],
      [
        "The notes written by your grandmother on the backs of many photos are just as valuable as the pictures themselves. Names, dates and places make an image useful to historians and genealogists. Our archivist, {p2}, has started transcribing these notes into our database so they can be searched online once the collection is catalogued.",
        "We also appreciated the family stories you shared during your visit. {p2} recorded them in our donor file, along with your memories of who appears in each photo. Even a small detail, such as the name of a horse or the reason a picture was taken, helps us describe an image accurately for visitors."
      ],
      [
        "Over the next few months, the photographs will be cleaned, rehoused in acid-free sleeves and stored in our climate-controlled vault. Fragile items, such as the cracked glass plates, will be handled by a conservator. Once the work is done, each item will be scanned at high resolution so that the originals can rest safely.",
        "Our first job is preservation. The collection will be stabilised, placed in archival boxes and kept in a room with steady temperature and humidity. Damaged prints will be assessed by a specialist before anyone tries to flatten or repair them. Digital copies will then be made, allowing people to view the images without handling the originals."
      ],
      [
        "We hope to feature a selection of your photographs in our exhibit on early settlement, planned for next spring. Any images we display will be credited to your family. We will also invite you to a preview evening before the exhibit opens to the public, and you are welcome to bring relatives who have an interest.",
        "Several images will be shared with the local school district for a unit on community history, with your family named as the source. We are also preparing a small online gallery. If anyone in your family would like to help us identify faces, we would be delighted to arrange a viewing session at the archives."
      ],
      [
        "Enclosed you will find two copies of our deed of gift. This document transfers ownership of the collection to the museum and outlines how it may be used. Please review it, sign both copies and return one to us in the envelope provided. Keep the other copy for your records. There is no rush.",
        "To complete the donation, we need a signed deed of gift, which is enclosed with this letter. It confirms that the photographs now belong to the museum and explains any conditions you may wish to set, such as limits on commercial use. If you have questions about the wording, {p3} will be happy to go through it with you."
      ],
      [
        "If you would like a tax receipt, we can arrange an independent appraisal of the collection. The appraiser will review the material and provide a written valuation, which our office will use to issue an official receipt. Let us know if you wish to proceed, and we will contact you with available dates.",
        "Your gift may qualify for a charitable tax receipt. Because the collection has historical value that is difficult to price, an outside appraiser would need to examine it. Our office can arrange this at no cost to you. Please indicate on the deed of gift whether you would like us to begin that process."
      ],
      [
        "Thank you again for your generosity. Your family's photographs will help tell the story of this region for generations. Please feel free to call me at {phone} or write to {email} if you have questions at any time. We will send you an update once the cataloguing work is complete.",
        "With sincere thanks from all of us at the museum. You are always welcome to visit and see how the work is progressing. If anything comes up, or if you find more photographs in a drawer somewhere, please contact our office at {phone}. We would be very glad to hear from you again."
      ]
    ],
    "details": [
      "Accession No. {ref}: approx. {bignumber} items, including {number} glass plate negatives, 3 albums, 14 cabinet cards and loose prints dated c. 1895-1940; received {date} from the donor family at {street}.",
      "Conservation work by our contracted conservator, {company}, is estimated at {amount}; priorities include cracked glass plates, silvered prints and 'red rot' on two leather album covers; work begins {date2}.",
      "Deed of gift (two originals) should be signed and returned by {date2} to {p3}, Collections Manager, at {street}; please initial each page and note any restrictions in Section 4.",
      "Independent appraisal by {company2}, a CCPERB-recognised appraiser, is scheduled tentatively for {date2}; the appraised value will determine the tax receipt amount (ref. {ref2}).",
      "The exhibit 'Early Settlement in the Valley' will open on {date3}, with a donor preview at {time}; approx. {number} images from your family's collection are on the shortlist.",
      "Digitisation specs: 600 dpi TIFF masters for prints, 1200 dpi for negatives; access copies (JPEG) will be posted online through the BC Archival Union List by {date3}, credited to {p1} and family (file {ref}).",
      "Our archivist, {p2}, has transcribed approx. {number} handwritten captions to date; names, places (e.g. '{city2} wharf') and dates will be searchable in the online catalogue.",
      "Storage: collection housed in vault B at 18 degrees C and approx. {percent} relative humidity; access for research by appointment only, booked at least {number2} days ahead through {email}."
    ]
  },
  {
    "id": "h01-fleet-maintenance",
    "kind": "report",
    "title": "Municipal truck fleet maintenance and parts recall",
    "orgs": [
      "City of {city} Fleet Services",
      "{city} Public Works Equipment Shop"
    ],
    "senderTitles": [
      "Fleet Maintenance Supervisor",
      "Lead Heavy Duty Mechanic",
      "Fleet Coordinator"
    ],
    "subjects": [
      "Quarterly fleet maintenance review, file {ref}",
      "Overdue inspections and parts recall"
    ],
    "sections": [
      [
        "This report covers the condition of the municipal truck fleet at the end of the third quarter. It was prepared after a records review and a walk-around of every unit parked at the {street} yard. The review found that most trucks are in sound working order, but a group of vehicles has fallen behind on mandatory inspections, and one supplier has issued a recall on a brake component.",
        "Fleet Services reviewed all heavy and light trucks assigned to roads, parks and water operations during the week of {date}. Staff compared each unit's service history against the provincial commercial vehicle inspection schedule and the shop's own preventive maintenance intervals. The findings below summarize which units are overdue, what was observed on the shop floor, and the action taken on a manufacturer recall."
      ],
      [
        "A total of {number} trucks were found to be past their annual commercial vehicle inspection date. Most of these are single-axle dump trucks used by the roads crew, which spent much of the summer on paving support and were rarely brought in during regular shop hours. Two water department service bodies were also late because their decals had been recorded under the wrong unit numbers in the tracking software.",
        "The overdue list is longer than last quarter. Several units missed their inspection window because the shop lost a licensed inspector to retirement in early summer and the replacement was not certified until recently. Crews also reported that booking a truck out of service was difficult during peak construction season, when every dump body and flatdeck was needed on the road each morning."
      ],
      [
        "During the walk-around, mechanics noted worn tie rod ends on one five-ton unit, a cracked mirror bracket on a sign truck, and a slow hydraulic leak at the hoist cylinder of a tandem dump. None of these defects were judged severe enough to remove the vehicles from service immediately, but each has been written up and assigned a repair date on the shop schedule.",
        "Observed defects were mostly minor. Staff found loose mud flaps, a burned-out clearance lamp on a sander, and uneven tread wear on the steer tires of a garbage packer, which suggests an alignment problem. One older pickup had a seized parking brake cable. The operator of that pickup later reported that the brake had felt stiff for several weeks but had not filed a defect slip."
      ],
      [
        "On {date2}, the shop received a recall bulletin from our parts supplier, {company}, covering a batch of air brake chamber clamps. The bulletin states that some clamps may have been heat treated incorrectly and could loosen under vibration. Staff checked purchase records and found that clamps from the affected batch were installed on several trucks during brake jobs over the past year.",
        "A recall notice arrived from the brake parts distributor, {company}, concerning a run of slack adjusters sold to fleet customers in the spring. According to the notice, the internal clutch may fail to hold adjustment, which would allow brake stroke to grow beyond legal limits. The shop's parts log shows the affected part numbers were fitted to trucks in the roads and solid waste divisions."
      ],
      [
        "Every truck carrying a recalled part was tagged and pulled from service the same afternoon. Mechanics measured pushrod stroke on each axle and found no units outside the legal limit, which suggests the defect had not yet caused a problem. Replacement parts were ordered on an urgent basis, and the supplier has agreed to cover both the parts and the labour under the recall program.",
        "The affected units were parked behind the wash bay and marked with red out-of-service tags. Because the solid waste division could not run its full collection routes without them, two trucks were borrowed from the neighbouring regional district for a few days. The supplier confirmed that corrected parts would ship from its warehouse in {city2}, and the first box arrived within forty-eight hours."
      ],
      [
        "To clear the inspection backlog, the shop has added a second inspection bay and scheduled an evening shift twice a week. Roads supervisors have agreed to release two trucks each Monday so that the overdue units can be processed in order of how late they are. The shop expects the backlog to be cleared before the first snow plowing assignments begin.",
        "The inspection backlog will be handled by bringing in a contract inspector, {company2}, for a short period while the shop's own staff focus on repairs. Units will be booked by the fleet coordinator rather than by individual crews, which should stop trucks from being held back at the last minute. A weekly status sheet will be posted in the lunchroom so foremen can see which units are due."
      ],
      [
        "The review also showed that the defect reporting habit needs work. Several problems found during the walk-around had been noticed by operators weeks earlier but were never written down. A short refresher on pre-trip inspections is being planned for all drivers, with a focus on air brake checks, lights and the correct way to complete and hand in a daily inspection report.",
        "Part of the delay traces back to the tracking software, which still lists some vehicles under unit numbers that were retired years ago. The fleet coordinator will spend the next month cleaning up these records and linking every truck to its correct licence plate, serial number and inspection decal. Once that is done, the system will send automatic reminders thirty days before each inspection is due."
      ],
      [
        "In summary, the fleet remains serviceable, the recall has been contained, and the overdue inspections have a clear plan for completion. A follow-up report will be filed once the last overdue unit has passed inspection and all recalled parts have been replaced. Questions about specific trucks can be directed to the fleet coordinator, who keeps the current list of tagged units.",
        "No injuries or collisions have been linked to either the overdue inspections or the recalled parts. Fleet Services will report again at the end of the next quarter, with a target of zero overdue units. Until then, any operator who notices a brake, steering or lighting defect is asked to tag the truck and call the shop rather than finish the shift with a known problem."
      ]
    ],
    "details": [
      "Unit No. 4417 (tandem dump, roads division) was last inspected on {date} and carries decal {ref}; its next inspection was booked for {date3} at {time} in Bay 2.",
      "The recall bulletin from {company} lists affected lot numbers by prefix; approx. {number} clamps were traced to work orders closed by {p1} between {date} and {date2}.",
      "Pushrod stroke readings were taken by {p2_title} on {date2} at the {street} yard; all were within the \"adjustment limit\" of the chamber size, with the longest reading recorded on the steer axle of Unit No. {number2}.",
      "Loaner trucks from the regional district were logged under agreement {ref2} from {date} onward; the rental credit of {amount} will be applied against the solid waste division's Q4 equipment budget.",
      "The contract inspector, {company2}, quoted {amount2} per unit (excl. GST) for annual CVIP inspections, including the decal fee, travel from {city2} and a written defect report for each vehicle.",
      "Operator {p3} reported the stiff parking brake on {date2}; the cable was replaced by the evening shift and the work order was closed at {time2} the same day.",
      "Tire wear on the packer's steer axle measured approx. 6/32 in. on the inside shoulder versus 11/32 in. outside; {p1_title} recommended on {date2} a full alignment check at {company}.",
      "The tracking software currently shows {number} \"orphan\" records, e.g. retired unit numbers still linked to active plates; cleanup is assigned to {p2} with a deadline of {date3}."
    ]
  },
  {
    "id": "h02-bridge-inspection",
    "kind": "report",
    "title": "Bridge inspection findings and repair plan",
    "orgs": [
      "{city} Engineering and Infrastructure",
      "Mid-Island Structures Group"
    ],
    "senderTitles": [
      "Bridge Inspection Engineer",
      "Structures Technologist",
      "Infrastructure Program Manager"
    ],
    "subjects": [
      "Bridge inspection findings, structure {ref}",
      "Bearing corrosion and interim load limit"
    ],
    "sections": [
      [
        "A detailed inspection of the river crossing on the east side of {city} was carried out on {date}. The structure is a three-span steel girder bridge with a concrete deck, built in the late 1960s and widened once since then. The inspection was scheduled as part of the regular five-year cycle, but it was moved forward after a resident reported rust stains on one of the piers.",
        "The bridge carrying traffic over the creek near {street} was inspected by a two-person team using a snooper truck and a small boat. Both abutments, the two piers, the girders, the deck underside and all eight bearings were examined at close range. The weather was dry and the water was low, which gave the team good access to the lower parts of the substructure."
      ],
      [
        "The most important finding concerns the steel rocker bearings at the north pier. Heavy section loss was observed on the base plates, and two of the rockers appear to be frozen in place by layers of corrosion. A frozen bearing cannot move as the girders expand and contract with temperature, which puts extra stress on the pier cap and the girder ends.",
        "Inspectors found advanced corrosion at the expansion bearings, mostly where water from a failed deck joint has been dripping onto them for years. The sliding plates are pitted, the anchor bolts have lost much of their original diameter, and one bearing has shifted slightly off its seat. Concrete under that bearing shows fine cracking, although no pieces have broken away."
      ],
      [
        "Other parts of the bridge were in fair condition. The deck surface has some patched potholes and minor scaling, the railings are secure, and the girders show only light surface rust away from the joints. Scour around the piers was measured with a sounding pole and found to be within normal limits. Drainage scuppers on the downstream side were clogged with gravel and leaves.",
        "Away from the bearings, the structure performed better than expected. Paint on the girders is faded but mostly intact. The concrete deck has hairline cracks typical of its age, with no exposed reinforcing steel. One section of the approach guardrail was bent, probably from a minor collision, and a crew from the roads department reported that it had already been flagged for replacement."
      ],
      [
        "Based on these findings, the engineer of record recommended an interim load restriction until the bearings can be replaced or jacked and reset. Calculations show that the bridge can still carry normal passenger traffic safely, but heavy trucks crossing at full legal weight would place too much demand on the damaged supports. The restriction was approved by the director of engineering the following day.",
        "The bridge will remain open, but with a reduced gross vehicle weight limit posted at both approaches. This decision followed a rating analysis that took the measured section loss into account. Cars, pickups, school buses and emergency vehicles are not affected. Loaded gravel trucks, logging trucks and large tankers will need to use the highway crossing instead until repairs are finished."
      ],
      [
        "Signs showing the new limit were installed on {date2}, and the local trucking companies and the school district were notified by letter. The RCMP traffic section and the fire department were also briefed so that their dispatchers know which crossing to use for heavy apparatus. The detour adds a few minutes for large vehicles but does not affect residents' daily trips.",
        "Notice of the restriction was sent to commercial carriers, the regional transit operator and all emergency services. Fire officials confirmed that their ladder truck falls under the new limit, so it will cross only in an emergency and at walking speed in the centre lane. Staff will check the posted signs each week, since temporary signs on this road have been stolen before."
      ],
      [
        "The repair plan calls for lifting the girders with hydraulic jacks, removing the corroded rockers and installing modern elastomeric bearings. The failed deck joint above the pier will be replaced at the same time so that water stops reaching the new bearings. Our bridge contractor, {company}, has done similar work on two other crossings in the region and is available next season.",
        "Repairs will be done in two stages. First, temporary steel shoring will be placed under the girder ends to take the load off the damaged bearings. Second, the bearings will be cut out and replaced, and the pier cap will be patched and sealed. The design is being prepared by {company}, with tender documents expected to go out early in the new year."
      ],
      [
        "Work will need to happen during the fisheries window, when in-stream activity is permitted, so the schedule is tied to that period. Traffic will be reduced to a single alternating lane for about three weeks while jacking takes place. Cyclists and pedestrians will be guided across the bridge on the protected sidewalk, which will stay open throughout the project.",
        "Because the creek supports spawning salmon, an environmental monitor will be on site whenever work happens near the water. Debris netting will be hung below the deck to catch paint chips and rust scale. Lane closures will be limited to weekday daytime hours, and the bridge will be fully open every evening and weekend while the shoring is in place."
      ],
      [
        "The load restriction will stay in effect until the new bearings are installed and a follow-up inspection confirms that the structure is performing as designed. In the meantime, staff will visit the bridge monthly to check the bearings for further movement. Any sudden change, such as new cracking in the pier cap, will trigger an immediate review by the engineer.",
        "Until repairs are complete, the bridge has been added to the monthly watch list. Inspectors will measure the gap at the shifted bearing and photograph the pier cracks from the same position each visit so changes can be compared. Residents who notice new damage, unusual noise or sagging should call the engineering office rather than wait for the next scheduled inspection."
      ]
    ],
    "details": [
      "Bearing B-3 (north pier, downstream girder) showed approx. {percent} section loss at the base plate; {p1_title} recorded the measurement with an ultrasonic thickness gauge on {date} at {time}.",
      "The interim load posting ('GVW limit, see sign') was approved under file {ref2} by {p2}, P.Eng., Director of Engineering; it applies to both the {street} approach and the south ramp.",
      "Scour soundings taken from the boat on {date} at {time2} found a maximum depth of approx. 1.4 m at Pier 2, upstream nose; no undermining of the spread footing was observed by {p3_title}.",
      "The contractor, {company}, estimates bearing replacement at {amount} including temporary shoring, jacking, elastomeric pads and a new strip-seal deck joint; the estimate is valid until {date3}.",
      "Detour signage was placed by {company2} on {date2}; heavy vehicles are directed via the highway crossing, adding approx. {km} to the trip for loaded gravel and logging trucks.",
      "Fire Rescue confirmed by email on {date2} that Ladder 1 (gross weight approx. 26,000 kg) will cross only for emergency calls, centre lane, at walking speed; {p2_title} will brief all {number} crews.",
      "Crack widths on the north pier cap were logged by {p1} on {date2} (photo set {ref}) using a crack comparator card: 0.2 mm to 0.4 mm, with efflorescence (white mineral staining) below Bearing B-2 and B-3.",
      "The in-stream work window set by the fisheries agency runs from {date} to {date3}; an environmental monitor from {company2} must be present for all work below the high-water mark."
    ]
  },
  {
    "id": "h03-transit-route-changes",
    "kind": "notice",
    "title": "Transit route changes, new stops and accessible boarding",
    "orgs": [
      "{city} Regional Transit",
      "Comox Strait Transit Commission"
    ],
    "senderTitles": [
      "Transit Planning Coordinator",
      "Customer Information Officer"
    ],
    "subjects": [
      "Route changes begin {date2}",
      "New stops and timetable for Route {number}"
    ],
    "sections": [
      [
        "Starting on {date2}, several bus routes in {city} will follow new paths and run on a revised timetable. These changes come from a year of rider surveys, ridership counts and feedback from the public meetings held last spring. The goal is to make trips more direct, cut down on long waits at transfer points, and bring service closer to the new housing near the hospital.",
        "Riders will notice a number of changes to local bus service later this season. Some routes are being straightened, a few lightly used stops are being removed, and new stops are being added where people actually want to go. The changes were planned with input from riders, drivers and the seniors' centre, and they take effect on {date2} with the fall service period."
      ],
      [
        "The biggest change affects the route that now loops through the industrial park. Instead of winding through empty streets on weekends, buses will travel straight along the main road to the downtown exchange. This shortens the trip by several minutes. Riders who work in the industrial park will still have service on weekdays, with trips timed to match the usual shift start times.",
        "The college route will no longer detour through the shopping plaza parking lot, which often caused delays when traffic backed up near the drive-through. Buses will stop on the street at a new shelter just outside the plaza entrance. A painted crosswalk with a push-button signal has been installed so riders can cross safely from the shelter to the stores."
      ],
      [
        "Four new stops are being added. Two will serve the townhouse developments on the north side, one will be placed near the entrance of the new public library, and one will be added outside the community health clinic on {street}. Each new stop will have a pole with route numbers, a printed schedule and, where space allows, a bench.",
        "New stops will open along the corridor where three apartment buildings were completed this year. A heated shelter with a real-time arrival screen will be installed at the busiest of these. Another new stop will serve the recreation centre, which many riders asked for during consultation. Stop locations are shown on the updated map at the downtown exchange and on our website."
      ],
      [
        "Some stops will close because they are very close to other stops or have almost no riders. Each closed stop will have a bag over the sign and a notice showing the nearest open stop. Before choosing which stops to remove, planners checked whether any were used regularly by riders with mobility aids, and those stops were kept in place.",
        "A small number of stops will be removed to keep buses moving and on time. In most cases the next stop is less than a two-minute walk away. Closed stops will be marked with a yellow notice for several weeks after the change. If a removed stop causes a real hardship for you, please contact us so the decision can be reviewed."
      ],
      [
        "The new timetable adds earlier morning trips on weekdays, with the first bus leaving the downtown exchange at {time}. Evening service is extended by an hour on Fridays and Saturdays. Sunday service stays the same. Printed timetables will be available on buses and at the library, recreation centre and city hall starting one week before the change.",
        "Weekday buses on the main routes will now run every fifteen minutes during the morning and afternoon peaks, up from every twenty. Midday trips stay at every thirty minutes. The last trip of the night will leave the hospital stop at {time2}, which lines up better with shift changes for hospital staff. Weekend schedules have been adjusted slightly to protect transfer times."
      ],
      [
        "All buses in our fleet are low-floor and have a ramp at the front door. Riders using a wheelchair, scooter or walker may ask the driver to lower the bus or deploy the ramp at any stop. Priority seating at the front can be folded up to make room for mobility devices, and drivers will ask other riders to move if needed.",
        "Accessible boarding is available on every route. When the bus arrives, the driver can kneel it closer to the curb and extend the ramp. Riders who are blind or have low vision may ask the driver to call out their stop. Each new stop has a concrete landing pad wide enough for a ramp, and none are placed on grass or gravel shoulders."
      ],
      [
        "If you rely on handyDART, your service is not affected by these changes. However, some handyDART riders may find that the improved conventional service now meets their needs for certain trips. Our travel training staff can ride along with you on a first trip to show you the new stops, the ramp, and how to signal your stop.",
        "We know changes like these take some getting used to. Customer service staff will be at the downtown exchange during the first week of the new schedule to answer questions and help riders plan their trips. Drivers have also been given route maps and will be patient with riders who are learning a new stop or connection."
      ],
      [
        "For full route maps, printed guides and stop-by-stop timetables, visit our website or call customer information at {phone}. Comments about the changes are welcome and will be considered during the next service review. Thank you for riding transit and for the helpful suggestions many of you shared during the planning process.",
        "Please check your usual trip before {date2}, especially if you transfer between routes. Updated schedules are available online, at the exchange kiosk, and by phone at {phone}. We will review ridership and rider comments after three months and make small adjustments if any part of the new network is not working as planned."
      ]
    ],
    "details": [
      "Stop No. {number} ('Library Entrance, northbound') opens on {date2}; it replaces the old stop near {street}, which closes the same day at the end of service.",
      "The first weekday trip leaves the downtown exchange at {time} (Bay C) and reaches the hospital approx. 18 min. later; riders transferring from {city2} on Route {number2} should allow at least 5 min. at the exchange.",
      "Temporary 'stop closed' notices will stay up from {date2} to {date3}; questions about a specific stop can be directed to {p1}, Transit Planning, at {phone}.",
      "The real-time screen at the {street} shelter was supplied by {company} under contract {ref}; arrival times are updated approx. every 30 seconds using GPS data from each bus.",
      "Travel training sessions run Tuesdays at {time} and {time2}; book through the seniors' centre (ext. 214) or with {p2_title}, who coordinates the ride-along program.",
      "Ridership counts collected between {date} and {date2} showed {bignumber} weekday boardings on the college route; approx. {percent} of trips started or ended at the plaza stop.",
      "handyDART eligibility is unchanged; riders registered under file {ref2} keep their booking privileges, e.g. same-day trips when space allows, as confirmed by {p3} of {company2}.",
      "Comments on the new network can be sent to {email} until {date3}; a summary of feedback and ridership will be presented to the transit commission by {p1_title}."
    ]
  },
  {
    "id": "h04-hydro-rate-change",
    "kind": "letter",
    "title": "Electricity rate change and time-of-use billing option",
    "orgs": [
      "Island Valley Power Co-operative",
      "{city} Electric Utility"
    ],
    "senderTitles": [
      "Customer Accounts Manager",
      "Billing Services Supervisor",
      "Energy Advisor"
    ],
    "subjects": [
      "Changes to your electricity rate, account {ref}",
      "New time-of-use billing option"
    ],
    "sections": [
      [
        "We are writing to let you know about a change to the residential electricity rate on your account, and to introduce a new billing option that you may choose if it suits your household. The new rate takes effect on {date2}. No action is needed if you would like to stay on standard billing, and your service will continue without any interruption.",
        "This letter explains two things: an approved increase to the basic residential rate, and a voluntary time-of-use plan that becomes available this winter. We know that any rate change matters to a household budget, so we have tried to set out clearly what is changing, why it is changing, and how you can compare the options before deciding anything."
      ],
      [
        "The utilities commission has approved an increase of {percent} to the energy charge for residential customers. The increase covers the cost of replacing aging poles and transformers, upgrading the substation that serves your area, and buying more power during the winter peak. The basic daily charge, which covers metering and customer service, will stay the same.",
        "Our costs have risen over the past two years, mainly because of storm repairs, higher prices for copper wire and transformers, and the expense of buying extra electricity on very cold days. After a public review, the regulator approved a modest change to the per-kilowatt-hour rate. For a typical home, this works out to a few dollars more on each monthly bill."
      ],
      [
        "Under the new time-of-use option, the price of electricity depends on when you use it. Power used overnight and on weekends will cost less than the standard rate, while power used during the weekday evening peak will cost more. The idea is to reward households that can shift some of their use, such as laundry or dishwashing, to quieter times of day.",
        "The time-of-use plan divides each day into three periods. The off-peak period runs overnight and is the cheapest. The mid-peak period covers most of the day. The on-peak period, from late afternoon to early evening on weekdays, carries the highest price. Holidays are billed at the off-peak rate all day, which many customers find helpful during long weekends."
      ],
      [
        "Your home already has a smart meter, which records hourly use, so no new equipment is needed. You can log in to your online account to see a chart of when your household uses the most power. That chart is the best way to judge whether time-of-use would save you money or cost you more than the standard rate.",
        "Because your meter records use by the hour, we were able to estimate what your bills would have been last year under each plan. Based on that history, your household would have paid roughly {amount} under time-of-use, compared with the amount you actually paid on standard billing. This is only an estimate, and your results will depend on your habits."
      ],
      [
        "Time-of-use works best for homes with an electric vehicle that can charge overnight, a hot water tank on a timer, or people who are home during the day. It may not suit households where everyone cooks, showers and does laundry right after work. If you heat your home with electric baseboards, a programmable thermostat can help you avoid the evening peak.",
        "Some customers will benefit more than others. If most of your use happens in the early evening and is hard to move, standard billing may remain the better choice. On the other hand, small changes like running the dishwasher before bed, or setting your electric vehicle charger to start at midnight, can add up to real savings over a year."
      ],
      [
        "To try the new plan, call us at {phone} or switch through your online account. You can return to standard billing at any time during the first year at no charge, and we will not hold you to the plan if it does not work for you. After the first year, you may change plans once every twelve months.",
        "Enrolment is open now. If you sign up before {date3}, your first time-of-use bill will include a comparison showing what you would have paid on the standard rate. This comparison will appear on every bill for the first six months, so you can see clearly whether the plan is saving you money before deciding to stay."
      ],
      [
        "If you are having trouble paying your bill, please contact us before your account falls behind. We offer equal payment plans that spread costs evenly over the year, and customers facing hardship may qualify for a crisis fund grant. Our energy advisors can also arrange a free home visit to suggest simple ways to lower your use.",
        "We also want to remind you about our rebate program for heat pumps, attic insulation and smart thermostats. Many customers who switch to a heat pump find their winter bills drop noticeably, especially when combined with time-of-use pricing. An energy advisor can walk you through the rebates available and help with the application paperwork if you would like."
      ],
      [
        "Thank you for being a customer. If you have questions about the rate change, the time-of-use option or your account, please reach out by phone or by email at {email}. Our staff are glad to go over your usage history with you and help you choose the plan that makes the most sense for your home.",
        "We appreciate your patience as these changes come into effect. A full rate schedule is posted on our website and is available in print at our customer office. If you would like a printed copy of your hourly usage history, or help comparing the two plans, {r_title}, please call us and we will mail it to you."
      ]
    ],
    "details": [
      "Account {ref} (service address {street}) is currently billed on Rate Schedule 1101; the change to the energy charge applies to all consumption read on or after {date2}.",
      "On-peak hours are 4:00 p.m. to 9:00 p.m., Monday to Friday (excl. statutory holidays); off-peak runs 11:00 p.m. to 7:00 a.m.; based on readings from {date} onward, your estimated annual difference is {amount2}, per analysis by {p1_title}.",
      "The crisis fund grant ('Customer Hardship Assistance') provides up to {amount} per household per year; applications are reviewed by {p2} and decisions are usually made within {number} business days.",
      "Heat pump rebates (file {ref2}) are paid through our partner, {company}, after installation by a registered contractor; submit the invoice, model No. and AHRI certificate by {date3} to qualify for the current amount.",
      "Your smart meter (serial No. {ref2}) recorded approx. {percent} of last year's use between 4:00 p.m. and 9:00 p.m.; this is above the average for homes in {city}.",
      "To enrol by phone, call {phone} between {time} and {time2}, Monday to Saturday; please have your account number and the name on the account ready, e.g. as shown on page 1 of your bill.",
      "A free in-home energy assessment at {street} can be booked with {p3}, Energy Advisor; visits take approx. 90 min. and include a thermal camera scan of walls, windows and the attic hatch in {city}.",
      "Equal payment plan balances are reconciled each year on {date2} by {p1_title}; any credit over {amount2} is refunded by cheque, and smaller amounts are carried forward to your next bill."
    ]
  },
  {
    "id": "h05-fibre-installation",
    "kind": "email",
    "title": "Fibre internet installation appointment",
    "orgs": [
      "Coastline Fibre Networks",
      "{city} Community Broadband"
    ],
    "senderTitles": [
      "Installation Scheduler",
      "Customer Onboarding Specialist"
    ],
    "subjects": [
      "Your fibre installation on {date2}",
      "Installation appointment, order {ref}"
    ],
    "sections": [
      [
        "Thanks for choosing fibre service for your home. Your installation is now booked, and this email explains what will happen on the day, what our technician will need from you, and what to expect while your old connection is switched over. Please read it through once now, then keep it handy so you can check the list again the night before.",
        "Good news: our crews have finished running fibre down your street, and your home is ready to be connected. We have booked your installation for {date2}. Below you will find a short checklist, a note about a brief service outage, and some tips that help most installs go smoothly and finish within the expected time."
      ],
      [
        "Your technician will arrive between {time} and {time2}. They will call about thirty minutes ahead to confirm. Someone eighteen or older needs to be home for the whole visit, which usually takes two to four hours. If the technician cannot reach anyone at the door, they will wait fifteen minutes and then have to rebook the appointment.",
        "Expect a call from the technician on the morning of the visit to confirm an arrival time within your booked window. Installs typically take about three hours, though older homes with plaster walls or tight crawlspaces can take longer. An adult must be present from start to finish, because the technician will need decisions from you about where equipment goes."
      ],
      [
        "Before the technician arrives, please clear a path to the spot where your phone or cable lines currently enter the house, often near the electrical panel or in the garage. Move any furniture, boxes or bikes that block that wall. If you have pets, please keep them in a separate room, since the doors will be opened often during the install.",
        "It really helps if you decide ahead of time where you want the Wi-Fi router to sit. A central spot on the main floor, off the floor and away from the microwave, gives the best coverage. The technician also needs access to a standard power outlet near that spot, and to the outside wall where the fibre drop cable will be attached."
      ],
      [
        "On the outside of your home, the technician will mount a small grey box called a network interface device. A thin fibre cable will run from the pole or the underground pedestal to that box. Inside, a second small box will be installed and connected to your router. Any holes drilled through the wall are sealed with weatherproof caulking before the technician leaves.",
        "The work outside involves connecting your home to the fibre terminal at the street, either overhead from the pole or through a buried conduit. If the line goes underground, the technician may need to dig a narrow, shallow trench across part of the lawn. The sod is set back in place afterward, though you may see a faint line for a couple of weeks."
      ],
      [
        "Your current internet and home phone service will be down for about an hour while the technician moves your connection to fibre. If anyone in the house works from home or relies on the landline for a medical alert device, please plan around this outage. Your phone number will carry over, and calls will work again once the install is complete.",
        "There will be a short outage, usually under an hour, while the old line is disconnected and the new one is activated. During that time, landline calls, including calls to 911, will not go through on your home phone. A charged cell phone is a good backup for that window. Alarm systems that report over the phone line may also go offline briefly."
      ],
      [
        "If you have a monitored security alarm, please call your alarm company before the appointment. Some older panels need a setting change to work over a fibre connection, and your alarm company may want to test the signal after the install. Our technician can confirm that the phone port is active, but cannot program the alarm panel itself.",
        "Before the technician leaves, they will run a speed test with you, help connect one or two of your devices to the new Wi-Fi network, and show you where the network name and password are printed on the router. They will also take away packaging and any old modem you no longer want, which we recycle through an approved electronics depot."
      ],
      [
        "Once the install is finished, please return your old modem to your previous provider if it was rented, so you are not charged for it. Your first bill from us will be prorated from the activation date. If you cancelled your old service, wait until the fibre connection is working before the cancellation takes effect, to avoid a gap in service.",
        "Our customer agreement includes a thirty-day satisfaction guarantee. If anything about the install does not meet your expectations, such as cable placement or a messy work area, let us know within that period and we will send someone back at no charge. Your first monthly bill will show a one-time credit for the installation fee, as promised when you ordered."
      ],
      [
        "Need to change the appointment? Please reply to this email or call {phone} at least two business days ahead. If the technician finds a problem that needs a second visit, such as a blocked conduit, they will book it with you before leaving. We look forward to getting you connected, and we hope the faster speeds make a real difference for your household.",
        "If you have questions before the visit, just reply to this message or reach our support team at {phone}. We will send a reminder by text the day before your appointment. Thanks again for signing up, and we hope you enjoy the new service as much as your neighbours already seem to."
      ]
    ],
    "details": [
      "Order {ref} is booked for {date2} with a 'morning window' of {time} to {time2}; the assigned technician is {p1}, who will text from a number ending in 4471.",
      "Your package (Fibre 1 Gig, symmetrical) is priced at {amount} per month for the first 12 months; the installation fee of {amount2} is credited on your first bill, per promotion code {ref2}.",
      "If the drop cable runs underground, {company} (our locating contractor) must mark buried utilities first; this is usually done between {date} and {date2} and you may see orange paint on the lawn.",
      "Alarm panels older than approx. 2015 may need a 'line seizure' setting changed by {company2}; please call your alarm provider before {date2} and give them work order No. {ref} for reference.",
      "Equipment installed: one ONT (optical network terminal), one Wi-Fi 6 router, approx. 30 m of drop cable, and a wall plate; serial numbers are recorded by {p2_title} on job sheet {ref2} at {time2}.",
      "To reschedule, call {phone} (option 2) or email {email} at least 48 hours ahead; same-day cancellations after {time} may carry a missed-visit charge of {amount2}.",
      "Old modems rented from your previous provider must be returned by {date3}; {company2} offers free drop-off at its {city} depot, Monday to Saturday, with a printed receipt.",
      "The street terminal serving {street} was spliced by {p3} on {date}; our records show {number} homes on your block are already active on this fibre segment."
    ]
  },
  {
    "id": "h06-harbour-moorage-renewal",
    "kind": "letter",
    "title": "Small-craft harbour moorage renewal",
    "orgs": [
      "{city} Harbour Authority",
      "Baynes Sound Small Craft Harbour Society"
    ],
    "senderTitles": [
      "Harbour Manager",
      "Wharfinger",
      "Moorage Administrator"
    ],
    "subjects": [
      "Annual moorage renewal, slip {ref}",
      "Your moorage agreement for next season"
    ],
    "sections": [
      [
        "Your annual moorage agreement at the harbour comes up for renewal on {date2}. This letter sets out the fees for the coming year, the documents we need from you, and a few changes to harbour rules that the board approved at its last meeting. Please read it carefully, since renewals that arrive late may lose priority for the same slip.",
        "It is time to renew your moorage for the next season. We are grateful for your continued tenancy and hope the past year on the water treated you well. To keep your current slip, we will need your signed agreement, payment and proof of insurance on file before {date2}. Details on each of these are included below."
      ],
      [
        "Annual moorage is charged by the length of the vessel, measured from the tip of the bow to the back of the swim grid or outboard bracket, whichever is longer. If your boat has changed since last year, or if you have added a bow pulpit or a new swim platform, please send an updated measurement so we can adjust the fee.",
        "Moorage fees are based on the overall length of the boat, not the length printed on its registration. Our wharfinger measured every vessel on the floats this summer, and in a few cases the measured length was longer than the length on file. If your renewal shows a different length from last year, that is the reason for the change."
      ],
      [
        "The board approved a modest increase for the coming year. Your renewal fee is {amount}, which includes access to fresh water at the float, use of the waste oil tank and garbage bins, and the parking pass for one vehicle. Shore power is billed separately according to your meter reading, which the wharfinger takes at the start of each month.",
        "Rates are going up slightly to help pay for new float sections on the east dock and the replacement of the ramp that leads down from the parking lot. Your total for the year comes to {amount}, payable in full or in two instalments. Electrical service at the slip remains a separate monthly charge, based on the meter at your power pedestal."
      ],
      [
        "As always, we require a current certificate of marine insurance showing at least two million dollars in liability coverage. The certificate must name the harbour authority as an additional insured and list the correct vessel name and length. A copy of the policy summary or a photo of your insurance card is not enough; we need the certificate itself.",
        "Proof of insurance is a condition of moorage. Your insurer or broker can email us a certificate directly, which is usually the fastest way. The certificate must show liability coverage that meets our minimum, name the harbour as an additional insured, and be valid for the full moorage term. Expired or incomplete certificates will delay your renewal."
      ],
      [
        "You may have heard that our waitlist has grown again. There are now more than {number} boaters waiting for a permanent slip, some for over three years. Because of this, the board will not hold slips for tenants who miss the renewal deadline. A slip that is not renewed on time will be offered to the next person on the waitlist.",
        "We want to be open about the waitlist, since it affects every tenant. Demand for moorage in this area far exceeds the space available, and the list has grown each year. Tenants who renew on time keep their slip. Slips that are given up or not renewed go to the next eligible applicant, in the order their names were added to the list."
      ],
      [
        "Please also note two rule changes. Liveaboard use is now limited to tenants who have a separate liveaboard permit, and permits are no longer being added. Also, dinghies may not be tied alongside the main float, as they block access for the fire hose cart. Dinghy racks are available near the ramp for a small yearly fee.",
        "A reminder about harbour rules: vessels must be kept in seaworthy condition, with working bilge pumps and clean, secure lines. Boats that sit low in the water or show signs of neglect may be asked to leave. In addition, all propane appliances on board must have current inspection tags, which our wharfinger may ask to see during the season."
      ],
      [
        "If you plan to sell your boat during the season, please remember that moorage cannot be transferred with the vessel. The new owner will need to apply through the waitlist like anyone else. If you replace your boat with a different one, contact the office before bringing it in, so we can confirm that it fits the slip safely.",
        "Tenants who expect to be away for an extended period should let the office know and leave an emergency contact who can reach the boat quickly. During winter storms, our staff check lines and fenders, but we cannot pump out or move vessels without permission. A local contact makes a real difference if a problem comes up at night."
      ],
      [
        "Please return the signed agreement, payment and insurance certificate to the harbour office, or email the documents to {email}. Cheques should be made payable to the harbour authority. If you have any questions about your renewal, {r_title}, call us at {phone}. We look forward to another season with you on the docks.",
        "Thank you for helping keep the harbour safe, clean and well run. Renewal documents may be dropped off at the office on the wharf, mailed, or sent by email to {email}. If you have questions or need to arrange an instalment plan, please call the office at {phone} during regular hours."
      ]
    ],
    "details": [
      "Slip {ref} (B-Dock, east side) is assigned to the vessel on file at an overall length of {number} feet; the renewal fee of {amount} covers the term from {date2} to the same date next year.",
      "Shore power is metered at Pedestal No. 14 and billed at {amount2} per kWh-based unit plus a monthly service charge; the last reading was taken by {p1_title} on {date}.",
      "The insurance certificate must show liability coverage of at least $2,000,000, list '{org}' as additional insured, and name the vessel exactly as registered; send it to {email} by {date2}.",
      "As of {date}, the waitlist held {number} applicants for slips over 30 ft.; approx. {percent} of them had been waiting longer than three years, according to records kept by {p2}.",
      "Dinghy rack spaces (Rack A, near the ramp) are rented for {amount2} per season; stickers are issued by the wharfinger, {p3_title}, and must be displayed on the transom by {date2}.",
      "Propane systems require an inspection tag dated within the last 2 years; certified marine technicians, e.g. {company}, can inspect on the float by appointment, usually between {time} and {time2}.",
      "The east dock float replacement, contracted to {company2} under tender {ref2}, is scheduled from {date3} onward; tenants on E-Dock will be moved temporarily to the transient float.",
      "Instalment plans split the fee into two equal payments, due {date2} and {date3}; a returned cheque fee of {amount2} applies, and late payment may affect your slip priority."
    ]
  },
  {
    "id": "h07-runway-resurfacing",
    "kind": "notice",
    "title": "Regional airport runway resurfacing and schedule changes",
    "orgs": [
      "{city} Regional Airport Authority",
      "North Island Airport Commission"
    ],
    "senderTitles": [
      "Airport Operations Manager",
      "Communications Coordinator"
    ],
    "subjects": [
      "Runway resurfacing begins {date}",
      "Flight schedule changes during runway work"
    ],
    "sections": [
      [
        "The main runway at the regional airport will be resurfaced this fall. The work begins on {date} and is expected to take about six weeks, depending on the weather. The current asphalt is more than twenty years old and has developed cracks, rutting and loose patches that need constant repair. A new surface will improve braking for aircraft and reduce maintenance costs.",
        "Starting on {date}, crews will begin removing and replacing the asphalt on the airport's main runway. This project has been planned for several years and is funded jointly by the airport authority and a federal airports program. During construction, the airport will remain open, but flight schedules will change, and travellers should check their bookings before heading to the terminal."
      ],
      [
        "To keep flights operating, most of the paving will be done at night, between {time} and early morning, when there are few scheduled departures. In the daytime, the runway will reopen with a shortened usable length. Aircraft will land past a marked work zone at one end, which is why some larger planes will need to carry fewer passengers or less fuel.",
        "The project will be done in phases so that part of the runway stays in use at all times. In the first phase, crews will mill and pave the southern third while flights use the remaining length. Displaced threshold markings and temporary lighting will show pilots exactly where the usable runway begins. Each phase will last roughly two weeks."
      ],
      [
        "Because the runway will be shorter during work hours, the airlines have adjusted their schedules. Some morning and evening flights will leave earlier or later than usual, and a few flights will be combined on days with lighter demand. The largest regional jet that normally serves the airport will be replaced with a smaller turboprop for the duration of the project.",
        "Several flights will be affected. The early departure to Vancouver will move later in the morning, and one of the afternoon flights will be cancelled on Tuesdays and Wednesdays, when bookings are lowest. Airlines have contacted passengers holding tickets for the affected dates. If you booked through a travel agent, please check with them to confirm your new times."
      ],
      [
        "Medevac flights, search and rescue aircraft and forest fire operations will continue to have priority. The work zone can be cleared within a short time if an emergency aircraft needs the full runway. Equipment will be moved off the paved surface, and staff will check for debris before the runway is reopened to any aircraft.",
        "Air ambulance service will not be interrupted. Crews have a plan to clear equipment and staff from the runway quickly when a medical flight is inbound, and the contractor will keep a sweeper truck ready at all times. Coordination with the flight service station and the BC Emergency Health Services dispatch centre has been set up for the whole project."
      ],
      [
        "Residents living near the airport may notice more noise and lights at night, mostly from paving machines, haul trucks and portable light towers. We have asked the contractor, {company}, to use broadband backup alarms, which sound softer than the usual beeping, and to keep trucks off residential streets. Asphalt will be hauled in using the airport access road only.",
        "Nearby residents should expect some nighttime activity. Paving crews will work under bright light towers aimed toward the runway, not toward homes. Haul trucks will enter through the service gate on the industrial side of the airport. If you notice dust, noise or lights that seem unreasonable, please let us know so we can follow up with the contractor that night."
      ],
      [
        "In the terminal, the parking lot, check-in counters and cafe will operate as usual. However, because some flights will be on smaller aircraft, carry-on bags may need to be checked at the gate. Passengers with large sporting gear, such as bikes or fishing rod tubes, should call their airline in advance to make sure there is room on board.",
        "Travellers are encouraged to arrive at least an hour before departure, as schedule changes may lead to busier check-in periods than usual. The terminal will open earlier on some days to match the revised departure times. Free parking will be offered to passengers whose flights are delayed overnight because of construction, once they show a boarding pass at the parking booth."
      ],
      [
        "The finished runway will have new pavement, refreshed markings and updated edge lights with energy-efficient LED fixtures. Once the work is complete, the airport will be better able to handle aircraft in wet weather, which is common here for much of the year. The project also extends the life of the runway by an estimated fifteen to twenty years.",
        "When the project is complete, pilots will have a smoother runway with improved grooving to help drain rainwater, which lowers the risk of aircraft skidding on landing. The new lighting will be brighter and use far less power. The airport also expects to attract more charter flights, which had been turned away in the past because of runway condition limits."
      ],
      [
        "We thank travellers, airlines and neighbours for their patience. Weekly updates on the project will be posted at the terminal and on our website. If you have questions about the runway work, please call the airport office at {phone}. For questions about a specific flight, please contact your airline directly.",
        "Updates will be shared through our website and social media, and printed notices will be posted at the terminal entrance. Questions about construction can be sent to {email} or directed to the operations office at {phone}. We appreciate the community's support as we complete this important upgrade to the region's air link."
      ]
    ],
    "details": [
      "A NOTAM (Notice to Airmen) will be issued by NAV CANADA before {date}; it will describe the displaced threshold, the reduced landing distance and the work hours from {time} to {time2}.",
      "The contractor, {company}, will mill approx. 75 mm of old asphalt and place {bignumber} tonnes of new mix; daily progress will be logged by {p1_title}, the airport's construction monitor.",
      "Passengers booked on Flight No. {number} for dates between {date} and {date2} should check with the airline; rebooking without a change fee is available under reference code {ref}.",
      "Runway edge lighting will be replaced by {date2} with LED fixtures supplied by {company2}; the airport estimates a power savings of approx. {percent} compared with the old incandescent system.",
      "Emergency clearing drills were held on {date} at {time} with {p2} (Airside Operations) and the flight service station; the runway was cleared of equipment in under 15 min. on each trial.",
      "The project budget of {amount} is shared between the airport authority and the federal Airports Capital Assistance Program (ACAP); the funding file is listed as {ref2} and is managed by {p1}.",
      "Noise complaints can be logged 24 hours a day at {phone}; each call is recorded with the time, location (e.g. {street}) and a short description, and is reviewed by {p3_title} the next morning.",
      "Free overnight parking for delayed passengers is available in Lot B from {date} to {date3}; show a boarding pass and photo ID at the booth after {time2} to receive a validation ticket."
    ]
  },
  {
    "id": "h08-snow-ice-control",
    "kind": "memo",
    "title": "Winter snow and ice control plan",
    "orgs": [
      "{city} Operations Department",
      "Town of {city} Roads and Transportation"
    ],
    "senderTitles": [
      "Roads Superintendent",
      "Manager of Operations",
      "Winter Maintenance Coordinator"
    ],
    "subjects": [
      "Winter maintenance plan, season starting {date}",
      "Snow and ice control: priorities and duties"
    ],
    "sections": [
      [
        "This memo outlines the snow and ice control plan for the coming winter. All roads, parks and utility staff who may be called out for winter duty should read it carefully. Last year's storms showed where our routes and staffing worked well and where they did not, and several changes have been made as a result. The plan takes effect on {date}.",
        "Winter readiness starts now. The team has reviewed last season's call-out records, complaint logs and fuel use, and the plan below reflects what we learned. Please read through the priority route list, your shift assignments and the updated sidewalk clearing duties. Supervisors will go over the plan with their crews at the next toolbox meeting before the first snowfall."
      ],
      [
        "Roads are cleared in order of priority. First priority covers arterial roads, bus routes, hills and the streets leading to the hospital, fire halls and ambulance station. Second priority covers collector roads and school zones. Residential streets and cul-de-sacs come last. Crews should not move to a lower priority until all routes above it are passable, unless a supervisor says otherwise.",
        "Our route map divides the town into three levels. Priority one routes carry the most traffic and give emergency services access to every neighbourhood. Priority two routes link those main roads to schools, care homes and the downtown core. Priority three routes are local streets. Plow operators should keep a printed copy of their route map in the cab in case the tablet fails."
      ],
      [
        "This year, steep hills on the north side have been moved up to priority one. During the February storm, several cars and a delivery van slid backward on those hills, and an ambulance had to take a longer route. Operators assigned to those areas should sand the hills early, even before plowing, whenever freezing rain or black ice is in the forecast.",
        "One important change: the road to the water treatment plant is now a priority one route. Last winter, the plant operator could not get in for several hours during a heavy snowfall, which delayed a chemical delivery. Plant access will be plowed in the first pass of every storm, along with the hospital and fire hall routes, to make sure critical utilities stay reachable."
      ],
      [
        "Anti-icing liquid will be applied to priority one roads before storms, when the forecast calls for snow and temperatures are close to freezing. Brine works best when it goes down a few hours before the snow. Once snow is falling, crews will switch to plowing and then to a sand and salt mix. Do not spread salt when temperatures fall well below freezing; use sand instead.",
        "Sand and salt will be applied based on road temperature, not air temperature. The infrared sensors on the trucks show road surface readings, so check them before you start spreading. Salt loses most of its effect on very cold pavement, so sand alone is often the better choice on those nights. Keep spread rates within the targets posted inside the sand shed door."
      ],
      [
        "Sidewalk clearing is being handled differently this year. Our crew will clear sidewalks along priority one routes and around schools using the two small sidewalk tractors. Residents are still responsible for clearing the sidewalk in front of their homes within twenty-four hours after a snowfall. Staff are asked to report any blocked bus stops or curb ramps they see while on patrol.",
        "This season, we will clear sidewalks in the downtown area, near transit stops and along walking routes to schools. Bylaw officers will remind residents of their duty to clear the sidewalk in front of their property, but the first response is a friendly door hanger, not a fine. Clearing curb ramps at crosswalks is especially important for people using wheelchairs and strollers."
      ],
      [
        "Operators must take a minimum of eight hours off after a twelve-hour shift, even in a long storm. Fatigue is a real hazard behind the wheel of a plow truck. Supervisors will arrange relief drivers from the parks and water crews, who completed winter equipment training last month. Do not start a new shift if you feel too tired to drive safely.",
        "Shift limits will be followed strictly. No operator should be on the road for more than twelve hours in a row. Our standby roster has been expanded, and two contract operators from {company} will be on call for long events. If you are scheduled for standby, keep your phone on and be ready to report to the yard within one hour of being called."
      ],
      [
        "Before the season starts, every plow and sander must pass a pre-season inspection. Check blades, cutting edges, hydraulic hoses, spinner motors and warning lights. Report any problem to the shop right away so repairs can be made before the first storm. The salt shed and sand pile have been restocked, and the brine tanks were tested and flushed last week.",
        "Equipment readiness is everyone's job. Each operator will be assigned a truck and is expected to complete a full walk-around before the first shift. Missing chains, cracked lights or slow hydraulics must be written up and given to the shop. The fuel tanks at the yard will be topped up whenever a storm is forecast, and the generator has been tested."
      ],
      [
        "Thank you for the long hours and hard work you put in every winter. Residents may not always see it, but our crews keep the town moving when the weather turns. If you have questions about the plan, your route or your shift, please speak to your supervisor or contact the operations office at {phone}.",
        "We know winter work is demanding, and the team's effort last year did not go unnoticed. Please keep safety first, take breaks when you need them, and report hazards right away. A copy of the full plan, including route maps, is on the shared drive and posted in the lunchroom. Questions can be sent to {email}."
      ]
    ],
    "details": [
      "Priority 1 routes (approx. {km} of lane length) must be cleared within 6 hours after snowfall ends; this target was set by council under policy {ref} and is reported monthly by {p1_title}.",
      "Brine (23 percent sodium chloride solution) is applied at approx. 100 L per lane-km; the tanks at the {street} yard were flushed and tested by {p2} on {date}.",
      "The standby roster for {date2} to {date3} lists {number} operators; anyone unable to cover a shift must find a qualified replacement and notify {p3_title} before {time}.",
      "Contract operators from {company} are paid {amount} per hour with a 4-hour minimum call-out; their {number2} tandem plows carry unit numbers starting with 'C-' and use radio channel 'Ops 2'.",
      "Sand stockpile at the north yard was measured at {bignumber} tonnes on {date}; a further delivery from {company2} is scheduled once the pile drops below approx. {percent} of capacity.",
      "Sidewalk tractors (Unit No. 712 and No. 713) clear priority sidewalks first, e.g. the hospital approaches and the {street} school zone; operators start at {time} when snow exceeds 5 cm, per {p2_title}.",
      "Road surface temperatures below -9 C reduce the effect of salt, as {p3} confirmed on {date}; in those conditions, use winter sand only, as noted in Section 4 of plan {ref2} and on the sticker in each cab.",
      "Door hangers ('Please clear your sidewalk within 24 hours') are issued by bylaw staff in {city}; repeat cases at the same address after {date2} are referred to {p1} for follow-up."
    ]
  },
  {
    "id": "h09-generator-load-test",
    "kind": "report",
    "title": "Hospital standby generator load test and fuel delivery issue",
    "orgs": [
      "{city} General Hospital Facilities Maintenance",
      "Island Health Plant Services, {city} Site"
    ],
    "senderTitles": [
      "Facilities Maintenance Supervisor",
      "Plant Operations Engineer",
      "Power Engineer"
    ],
    "subjects": [
      "Generator load test results, work order {ref}",
      "Standby power test and fuel delivery problem"
    ],
    "sections": [
      [
        "The annual full-load test of the hospital's standby generators was carried out on {date}. The test checks that the emergency power system can carry the building's critical loads, such as operating rooms, intensive care, elevators and life safety lighting, if utility power fails. Both diesel generators were run under load for several hours while plant staff recorded voltage, frequency, temperatures and fuel use.",
        "This report records the results of the yearly load bank test on the two emergency diesel generators that serve the hospital. The test was arranged with clinical managers well in advance so that no surgeries or procedures were scheduled during the switch-over periods. Plant services staff and a technician from the generator service company attended for the entire test."
      ],
      [
        "The test began with a simulated power failure at {time}. Both generators started automatically and the transfer switches moved the essential circuits onto generator power within the required time. Nursing staff on the inpatient units reported that the lights flickered briefly, as expected, and that all monitors and infusion pumps stayed on their internal batteries during the short changeover.",
        "To start the test, the main utility breaker was opened to cut power to the essential electrical system. Generator one started within seconds and picked up the life safety branch first, followed by critical care circuits. Generator two came on line shortly after. Staff observed that every automatic transfer switch operated correctly, and no alarms were triggered on the building management system."
      ],
      [
        "After the building test, a portable load bank was connected so each generator could be run near its full rated output. Generator one held steady voltage and frequency for the whole run. Coolant and oil temperatures stayed well within normal limits. Exhaust colour cleared after the first few minutes, which suggests that the engine was burning fuel cleanly at high load.",
        "With the building returned to utility power, each generator was loaded in steps using the rented load bank. Generator one performed well at every step. Generator two also carried full load, but the technician noticed a small coolant weep at a hose clamp near the radiator. It was tightened during the test, and the level was checked again at the end with no further loss."
      ],
      [
        "One concern was noted with generator two. Its fuel day tank alarm sounded partway through the run, warning that the level was dropping faster than the transfer pump could refill it. Investigation showed that the main underground storage tank was lower than the reading on the gauge suggested, and the pump was briefly pulling air before the level recovered.",
        "During the test, plant staff compared the fuel gauge reading on the bulk storage tank with a manual stick measurement. The two did not match. The manual reading showed considerably less fuel than the gauge, which means the tank level sensor needs to be recalibrated or replaced. This would not have been caught without running the generators at high load for an extended time."
      ],
      [
        "The low reading led to a second problem. A fuel delivery from our supplier, {company}, had been scheduled for the week before the test, but the truck never arrived. The supplier later reported that the delivery was missed because of a dispatch error during a staff changeover. Hospital staff were not told about the missed delivery and assumed the tank had been filled.",
        "Staff then checked the fuel delivery records. A routine top-up delivery booked with {company} had been cancelled by the supplier without notice, apparently because a delivery driver was unavailable. The hospital only learned of the cancellation when plant staff phoned to ask for a delivery slip. This meant the tank had been running at a lower level than anyone realized."
      ],
      [
        "An emergency delivery was requested the same afternoon, and the tank was refilled by {time2}. Plant services has also asked the supplier for a written explanation and a commitment to confirm every delivery by email. In the meantime, a second fuel supplier, {company2}, has agreed to act as a backup so that the hospital is never relying on a single company.",
        "Plant services arranged an urgent fill, which arrived that evening. Following this incident, the department will no longer rely on standing orders alone. Each delivery will be confirmed in writing, and a staff member will stick-measure the tank before and after every fill. A backup supply agreement has also been signed with {company2} for use during storms or supplier shortages."
      ],
      [
        "The faulty tank sensor was replaced by an instrument technician two days after the test. The new sensor was checked against a manual dip reading and found to be accurate. It now sends a low-fuel warning to the building management system and to the on-call power engineer's phone, rather than only showing a reading on a panel in the generator room.",
        "Repairs and follow-up are under way. A replacement level sensor has been ordered and will be installed and calibrated on arrival. Until then, the power engineer on each shift will take a manual fuel reading once a day and record it in the plant log. The coolant hose on generator two will be replaced at its next scheduled service."
      ],
      [
        "Overall, both generators passed the load test and are capable of carrying the hospital through a utility outage. The fuel issue has been corrected and new checks are in place. This report has been shared with the hospital's emergency preparedness committee and will be reviewed again at the next quarterly facilities meeting.",
        "In conclusion, the emergency power system is in good working order. The fuel shortfall was found during a planned test rather than a real outage, which allowed it to be corrected safely. A follow-up test of generator two at reduced load will be run within one month to confirm that the coolant repair is holding."
      ]
    ],
    "details": [
      "Generator No. 1 (1,250 kW, diesel) carried approx. {percent} of rated load for 2 hours; readings were recorded every 15 min. by {p1_title} starting at {time}.",
      "Automatic transfer switch ATS-3 (critical branch) transferred in 7.2 seconds; the test sequence and results were witnessed by {p2} of {company} and filed under work order {ref}.",
      "Manual stick reading of the bulk tank at {time2} showed approx. {number} cm of fuel, while the gauge indicated about half full; the sensor was tagged 'out of service' by {p3_title}.",
      "The missed delivery (order {ref2}, scheduled {date}) was not reported by {company}; the emergency fill of approx. {bignumber} litres was invoiced at {amount}, incl. after-hours charges.",
      "A backup fuel agreement with {company2} was signed on {date2}; it guarantees delivery within 6 hours during a declared emergency, at a fixed premium of {amount2} per delivery.",
      "On {date}, Generator No. 2 showed a coolant weep at the lower radiator hose clamp; {p1} tightened it during the test, and hose replacement is scheduled for {date3} (PM work order to follow).",
      "The new tank level sensor (4-20 mA, ultrasonic type) sends a 'Low Fuel - 50%' alarm to the BMS and pages the on-call power engineer at {phone}, as set up by {p2_title} on {date2}.",
      "Load bank rental from {company2} was booked for {date} from {time} to {time2}; total cost was {amount}, which is charged to the facilities life-safety testing budget."
    ]
  },
  {
    "id": "h10-radio-system-cutover",
    "kind": "memo",
    "title": "Emergency services radio upgrade and cut-over night",
    "orgs": [
      "{city} Emergency Communications Centre",
      "North Island 911 Dispatch Services"
    ],
    "senderTitles": [
      "Communications Centre Manager",
      "Radio Systems Coordinator",
      "Deputy Operations Manager"
    ],
    "subjects": [
      "Radio cut-over on {date2}: what to expect",
      "Radio system upgrade and fallback procedures"
    ],
    "sections": [
      [
        "After nearly two years of planning, the new digital radio system will go live on the night of {date2}. This memo explains how the cut-over will work, what dispatchers and field crews need to do, and what happens if the new system has problems. Every call-taker, dispatcher and supervisor scheduled for that night should read this carefully and attend one of the briefings.",
        "The move from our aging analog radio network to the new digital trunked system is now scheduled. The cut-over will take place overnight on {date2}, when call volumes are usually lowest. This memo sets out the timeline, staff roles and the fallback steps the team will use if any part of the new system does not work as expected."
      ],
      [
        "The old system has served the region for more than twenty years, but replacement parts are getting hard to find, and coverage in some valleys has always been poor. The new system adds three tower sites, improves signal inside large buildings, and lets fire, police and ambulance crews talk to each other on shared talk groups during major incidents.",
        "Most of the team already knows the problems with the current radios. Transmissions break up near the river, the repeater on the ridge has failed twice this year, and there is no simple way for different agencies to share a channel. The new system fixes these issues and adds features like emergency buttons that identify the radio pressing them."
      ],
      [
        "The cut-over will begin at {time}. For the first hour, both systems will run side by side while the technicians from {company} switch tower sites one at a time. Field units will be told by broadcast when to change their radios to the new talk groups. Dispatchers will use the new consoles once each site is confirmed working.",
        "On cut-over night, the vendor's technicians, from {company}, will be in the equipment room and at the main tower site. Starting at {time}, units will be moved over in groups: police first, then fire, then ambulance and public works. Each group will do a roll-call check with dispatch before the next group begins the switch."
      ],
      [
        "Extra staff will be on shift that night. One dispatcher will be dedicated to the old consoles until every unit has moved over, so no call goes unanswered. A supervisor will keep a written log of every step, every problem reported and the time it was resolved. Please keep personal phones away from the console area so the floor stays focused.",
        "Staffing will be increased so that each console has a second person who can take notes and handle phone calls with field supervisors. A radio technician will sit on the dispatch floor all night. Call-takers should continue answering 911 calls as usual; the radio change does not affect the phone system or the computer-aided dispatch software."
      ],
      [
        "If the new system fails during the cut-over, the supervisor will order a rollback to the old analog channels. Dispatchers will broadcast the rollback on both systems, and field units will switch back to their old channel settings. The old equipment will not be removed for at least two weeks, so it remains available as a full backup.",
        "Our fallback plan has three levels. If a single tower site fails, units in that area will be moved to a nearby site. If the dispatch consoles fail, dispatchers will use desktop control stations in the backup room. If the whole system fails, the team will roll back to the analog network, which will stay powered and ready until the new system is fully accepted."
      ],
      [
        "As a last resort, if neither radio system is working, dispatchers will contact field units by cell phone using the contact sheet printed for that night. Fire halls will be alerted by the station phone and the paging system. Every supervisor will have a copy of the contact sheet at the console, and a spare copy will be kept in the backup room.",
        "Cell phones and the paging system will serve as a final backup. Before the cut-over, each agency will provide a list of on-duty unit phone numbers. If radio contact is lost for more than a few minutes, dispatchers will begin calling units directly, starting with any unit assigned to an active call, and will note the time of each contact in the log."
      ],
      [
        "Training on the new consoles has been completed by most staff, but anyone who missed a session must book one before the cut-over. Practice talk groups are open now, so take some time on quiet shifts to get comfortable with the new screens, the patching tools and the emergency button alerts.",
        "Before {date2}, every dispatcher must complete the hands-on console training and sign off on the quick reference guide. The training room has a live console connected to a test talk group. Please use it to practise patching channels, handling an emergency button activation and moving a unit between talk groups until the steps feel routine."
      ],
      [
        "We know a change like this can be stressful, especially on a night shift. Supervisors will check in with staff throughout the night, and a debrief will be held the following afternoon to collect feedback. If you have questions before the cut-over, please contact the radio systems coordinator at {phone}.",
        "Thank you for your patience and flexibility through this project. The new system is a big step forward for both dispatcher and responder safety. A debrief will take place within a week of the cut-over, and any issues raised will be tracked until they are fixed. Send questions or concerns to {email} at any time."
      ]
    ],
    "details": [
      "The cut-over window runs from {time} on {date2} to approx. {time2}; the go/no-go decision will be made by {p1_title} at 2200 hrs after a final check of all {number} tower sites.",
      "Rollback is triggered by any of the following: loss of 2 or more sites, console failure lasting over 5 min., or failed roll-call for a whole agency; see procedure {ref}, page 4, as approved by {p1} on {date}.",
      "Vendor technicians from {company} (lead: {p2}) will be on site; their after-hours escalation number is {phone}, and the service agreement reference is {ref2}.",
      "Police units move to talk group 'PD-Main' first at {time} on {date2}, followed by fire ('FD-Dispatch'), then ambulance and public works; each group must complete roll-call before {p3_title} approves the next step.",
      "The new system adds tower sites at {city2}, the landfill ridge and the water reservoir, improving in-building coverage by an estimated {percent} according to tests by {company2}.",
      "Console training records show {number} of {number2} dispatchers signed off as of {date}; remaining staff must complete the 4-hour session (incl. practical test) before {date2}.",
      "The analog repeaters will stay powered until {date3}; decommissioning, estimated at {amount}, is scheduled only after formal system acceptance by {p1} and the agency chiefs.",
      "After {date2}, emergency button activations (labelled 'EMER' on the console) display the unit ID and talk group; dispatchers must acknowledge within 10 seconds, per SOP {ref}, and notify {p2_title}."
    ]
  }
];

if (typeof module !== "undefined") module.exports = SCENARIOS;
