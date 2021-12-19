# Dynamic Checklist
Live demo: https://kzlsahin.online/list.A.2.1.html

A checklist page with dynamic filtering system which is based on conditional dependencies of items to a set of features.
Filtering system is based on logical expressions like:

 "if length of ship is greater than ....."

 "if type of ship is ....."

The reason is derived from legal texts. In legal texts, items includes conditional expressions which defines the scope of the expression. 
The Dynamic Checklist also uses the same approach; predefined features which the items are dependent are implemented as input components.
Each item has dependency information and logical expressions which defines the conditions of the dependencies.

## How it works

Each item can be bound to an input feature with a logical expression. The filter checks logical bindings and expressions of each item.
If a set of logical expressions of an item does not return true (all expressions should return true) then, the item gets removed from the list.

## Features

 - Several kind of inputs can be defined,
 - Logical expressions can be used to filter the list (==, <=, >=, !=, >>, <<)
 - Reporting of the unchecked items
 - PDF reporting
 - Optionally print the list with all items unchecked and empty reporting field.
 - References to the root document can be inserted.

## Why would I use it?

Especially for automating the filtering process of legal or regulational requirements.

Suppose that you apply for a new passport or anything that has some prerequistes and you want to know what you are supposed to do or which documents should be supplied, while the requirements have wide variety of posibilities and has serious complexity.

A dynamic checklist would ease the job for you.

Or,suppose that you are a civil officer who is supposed to receive applications of such kind. And think that thare may be 2^5 possible situation, maybe more. Then, having this kind of dynamic checklist would perform the required logical processing instead of you.


