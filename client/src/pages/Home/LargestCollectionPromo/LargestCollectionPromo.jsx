import { Route, Routes } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import collectionsData from './data';
import styles from './LargestCollectionPromo.module.sass';

function LargestCollectionPromo () {
  // Prepare empty lists for following grouping cards -> 2 in group
  const collectionCards = cardDataList => {
    let collectionCardsGroup = cardDataList
      .map((e, idx) => {
        if (idx % 2 === 0) {
          return [];
        } else {
          return null;
        }
      })
      .filter(el => el !== null);

    // Need for filling empty  collectionCardsGroup lists
    let currentGroupItemIdx = 0;

    // Prepare card markup
    cardDataList = cardDataList.map(e => (
      <a
        href='#'
        style={{ backgroundColor: e.bgColor }}
        key={e.text}
        className={styles.collectionCard}
      >
        <img
          className={
            e.icon ? styles.collectionCardIcon : styles.collectionCardImg
          }
          src={e.icon ? e.icon : e.image}
        ></img>
        <div className={styles.collectionCardText}>{e.text}</div>
      </a>
    ));

    // Filter prepared card markup into collectionCardsGroup lists
    cardDataList.forEach((e, idx) => {
      if (idx > 0 && idx % 2 === 0) {
        currentGroupItemIdx++;
      }
      collectionCardsGroup[currentGroupItemIdx].push(e);
    });

    // Convert collectionCardsGroup lists into collectionCardsGroup divs
    return collectionCardsGroup.map(e => {
      console.log(e);
      return (
        <div className={styles.collectionCardsGroup} key={e[0].key}>
          {e}
        </div>
      );
    });
  };
  return (
    <>
      <h2 className={styles.headingText}>
        Largest Collection of Brandable Names
      </h2>
      <p className={styles.descriptionText}>
        Explore themed brand name collections created by our experienced team of
        branding experts
      </p>
      <Tabs>
        <TabList className={styles.categorySwitchContainer}>
          <Tab
            className={styles.collectionGroupBtn}
            selectedClassName={styles.collectionGroupBtnFocused}
          >
            Top Categories
          </Tab>
          <Tab
            className={styles.collectionGroupBtn}
            selectedClassName={styles.collectionGroupBtnFocused}
          >
            Top Industries
          </Tab>
          <Tab
            className={styles.collectionGroupBtn}
            selectedClassName={styles.collectionGroupBtnFocused}
          >
            Top Ideas
          </Tab>
        </TabList>

        <section className={styles.cardsSection}>
          <TabPanel>
            <div className={styles.collectionLinkBox}>
              <div className={styles.cardsBox}>
                {collectionCards(collectionsData.TopCategories)}
              </div>
              <a href='#' className={styles.viewAllLink}>
                View all Categories
              </a>
            </div>
          </TabPanel>

          <TabPanel>
            <div className={styles.collectionLinkBox}>
              <div className={styles.cardsBox}>
                {collectionCards(collectionsData.TopIndustries)}
              </div>
              <a href='#' className={styles.viewAllLink}>
                View all Industries
              </a>
            </div>
          </TabPanel>

          <TabPanel>
            <div className={styles.collectionLinkBox}>
              <div className={styles.cardsBox}>
                {collectionCards(collectionsData.TopIdeas)}
              </div>
              <a href='#' className={styles.viewAllLink}>
                View all Ideas
              </a>
            </div>
          </TabPanel>
        </section>
      </Tabs>
    </>
  );
}

export default LargestCollectionPromo;

import React from 'react';
