import React from "react";
import cx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import TextInfoContent from "@mui-treasury/components/content/textInfo";
import { useBlogTextInfoContentStyles } from "@mui-treasury/styles/textInfoContent/blog";
import { useOverShadowStyles } from "@mui-treasury/styles/shadow/over";
import { Wrapper, ProblemStatements } from "../Commons";

const useStyles = makeStyles(({ breakpoints, spacing }) => ({
  root: {
    margin: "auto",
    borderRadius: spacing(2), // 16px
    transition: "0.3s",
    boxShadow: "0px 14px 80px rgba(34, 35, 58, 0.2)",
    position: "relative",
    maxWidth: 500,
    marginLeft: "auto",
    overflow: "initial",
    backgroundimage: "linear-gradient(to right, #b8c6db 0%, #f5f7fa 74%)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingBottom: spacing(2),
    [breakpoints.up("md")]: {
      flexDirection: "row",
      paddingTop: spacing(2),
    },
  },
  media: {
    width: "88%",
    marginLeft: "auto",
    marginRight: "auto",
    marginTop: spacing(-3),
    height: 0,
    paddingBottom: "48%",
    borderRadius: spacing(2),
    backgroundimage: "linear-gradient(to right, #b8c6db 0%, #f5f7fa 74%)",
    position: "relative",
    [breakpoints.up("md")]: {
      width: "100%",
      marginLeft: spacing(-3),
      marginTop: 0,
      transform: "translateX(-8px)",
    },
    "&:after": {
      content: '" "',
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundimage: "linear-gradient(to right, #b8c6db 0%, #f5f7fa 74%)",
      borderRadius: spacing(2), // 16
      opacity: 0.5,
    },
  },
  content: {
    padding: 24,
  },
  cta: {
    marginTop: 24,
    textTransform: "initial",
  },
}));

export const Problemstatement_cards = React.memo(function BlogCard() {
  const styles = useStyles();
  const {
    button: { buttonStyles },
    ...contentStyles
  } = useBlogTextInfoContentStyles();
  const shadowStyles = useOverShadowStyles();
  return (
    <>
      <ProblemStatements>
        <Card className={cx(styles.root, shadowStyles.root)}>
          <CardMedia
            className={styles.media}
            image={"https://i.ibb.co/Qm94gp8/hospital.jpg"}
          />
          <CardContent>
            <TextInfoContent
              classes={contentStyles}
              overline={"Problem statement 1"}
              heading={"Healthcare"}
              body={
                "Git is a distributed version control system. Every dev has a working copy of the code and..."
              }
            />
            <Button className={buttonStyles} color="white">
              Read more
            </Button>
          </CardContent>
        </Card>
        <Wrapper />
        <Card className={cx(styles.root, shadowStyles.root)}>
          <CardMedia
            className={styles.media}
            image={"https://i.ibb.co/Qm94gp8/hospital.jpg"}
          />
          <CardContent>
            <TextInfoContent
              classes={contentStyles}
              overline={"Problem statement 2"}
              heading={"Cybersecurity"}
              body={
                "Git is a distributed version control system. Every dev has a working copy of the code and..."
              }
            />
            <Button className={buttonStyles}>Read more</Button>
          </CardContent>
        </Card>
        <Card className={cx(styles.root, shadowStyles.root)}>
          <CardMedia
            className={styles.media}
            image={"https://i.ibb.co/Qm94gp8/hospital.jpg"}
          />
          <CardContent>
            <TextInfoContent
              classes={contentStyles}
              overline={"Problem statement 3"}
              heading={"Nutrition and diet"}
              body={
                "Git is a distributed version control system. Every dev has a working copy of the code and..."
              }
            />
            <Button className={buttonStyles}>Read more</Button>
          </CardContent>
        </Card>
        <Card className={cx(styles.root, shadowStyles.root)}>
          <CardContent>
            <TextInfoContent
              classes={contentStyles}
              overline={"Problem statement 4"}
              heading={"Mental wellbeing"}
              body={
                "Git is a distributed version control system. Every dev has a working copy of the code and..."
              }
            />
            <Button className={buttonStyles}>Read more</Button>
          </CardContent>
        </Card>
        <Card className={cx(styles.root, shadowStyles.root)}>
          <CardContent>
            <TextInfoContent
              classes={contentStyles}
              overline={"Problem statement 5"}
              heading={"Virtual interaction"}
              body={
                "Git is a distributed version control system. Every dev has a working copy of the code and..."
              }
            />
            <Button className={buttonStyles}>Read more</Button>
          </CardContent>
        </Card>
      </ProblemStatements>
    </>
  );
});

export default Problemstatement_cards;
