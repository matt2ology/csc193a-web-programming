# Assignment 9 Response

In response to the following questions:
[Assignment 9 prompt](assignment_09_prompt.md)

## Are you working on your Senior Project now?

Yes, Senior Project Part 2 (CSC 191). Our client is the Sierra College Foundation.
Their request is to develop a solution to the lack of a centralized platform
for alumni interaction.

Our proposed solution is to develop an alumni Portal Development, a dedicated
website, where alumni can:

1. **Connect**: Central hub for networking and updates
2. **Contribute**: Streamlined donation process to support the Foundation
3. **Collaborate**: Bulletin for job opportunities and event announcements

## Do you use Node.js?

Yes. In hindsight we should have used Django; for, it had a lot of the things
we needed built into the framework, so we don't have to re-invent the wheel and
the overhead that comes with it like having a CSRF token
(cross-site request forgery token) by default.

## How do you connect to your DB?

Via AWS RDS (Amazon Relational Database Service).
It hosted our MySQL database; and, we used MySQL Workbench
to interact with this DB.

## What tools do you use to build your service?

We used the following:

- AWS EC2
- AWS S3
- AWS RDS
- Cloudinary
