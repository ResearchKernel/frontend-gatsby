import React from "react";
import styled from "styled-components";

const Body = styled.body`
  background-color: #7dbcff99;
`;

const PageLayout = styled.div`
  background-color: rgb(255, 255, 255);
  border-left: 25px solid #0079D3;
  width: 1059px;
  padding: 25px;
  margin: 25px;
  border-radius: 4px;
  max-height: 450px;
  height: 380px;

    :hover 
    {
        border: 1px solid rgb(137, 137, 137);
        border-left: 25px solid #0079D3;
    }
`;

const Header = styled.div`
    color: rgb(120, 124, 126);
    padding-bottom: 5px;  
    `;

const PostedBy = styled.span`
    `;

const PublishedTime = styled.span`
    padding-left: 5px;
`;



const Link = styled.a`
    text-decoration: none;
`;

const Topic = styled.div`
    text-decoration: none;
    cursor: pointer;
    display: inline;
    color: rgb(34, 34, 34);
    overflow-wrap: break-word;
    font-size: 18px;
    font-weight: 500;
    line-height: 22px;
    padding-right: 5px;
    border-bottom: 2px solid;
    &: hover {
    color: #007bff;
    }
`;

const Paragraphs = styled.div`
    padding-top: 16px;
    font-family: Noto Sans, Helvetica Neue, Segoe UI, Helvetica, Verdana, Arial, sans - serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    color: rgb(26, 26, 27);
    overflow: auto;

    `;



export default class MainView extends React.Component {

    render() {

        return (
            <Body>
                <PageLayout>
                    <Header>
                        <PostedBy>Posted by Abhishek Gupta </PostedBy>
                        <PublishedTime>4 hours ago</PublishedTime>
                    </Header>
                    <Link href="#"><Topic>Subreddits that Ban users for being apart of another Subreddit should be removed of reddit</Topic></Link>
                    <Paragraphs>
                        <p>Lately I have been seeing posts where someone is banned for being apart of another subreddit. For example I saw someone who was subbed to the_Donald was banned from offmychest and the reason the mod listed the ban for was he was apart of the_Donald and they immediately thought he was a troll. I personally don't think people should be banned and stereotyped because of their political veiws from non political communities.</p>
                        <p>Edit: Yes I know this is very cliche. But, thank you to the 7 people who gave me my first awards. I very much appreciate it!!!!</p></Paragraphs>
                </PageLayout>


                <PageLayout>
                    <Header>
                        <PostedBy>Posted by Abhishek Gupta </PostedBy>
                        <PublishedTime>4 hours ago</PublishedTime>
                    </Header>
                    <Link href="#"><Topic>Subreddits that Ban users for being apart of another Subreddit should be removed of reddit</Topic></Link>
                    <Paragraphs>
                        <p>Lately I have been seeing posts where someone is banned for being apart of another subreddit. For example I saw someone who was subbed to the_Donald was banned from offmychest and the reason the mod listed the ban for was he was apart of the_Donald and they immediately thought he was a troll. I personally don't think people should be banned and stereotyped because of their political veiws from non political communities.</p>
                        <p>Edit: Yes I know this is very cliche. But, thank you to the 7 people who gave me my first awards. I very much appreciate it!!!!</p></Paragraphs>
                </PageLayout>

            </Body>

        )
    };
};


