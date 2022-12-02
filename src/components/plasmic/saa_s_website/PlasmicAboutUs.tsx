// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aLuc5FJ4muSJEjCmsd2jqk
// Component: 9IeeU-alEyAui_
import * as React from "react";

import * as p from "@plasmicapp/react-web";
import * as ph from "@plasmicapp/host";

import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Header2 from "../../Header2"; // plasmic-import: v-Nor-joDHwHq0/component
import Button from "../../Button"; // plasmic-import: DBhKpuopLwsn-/component
import HeroSection from "../../HeroSection"; // plasmic-import: Im3OzPt78E8hnx/component
import Footer from "../../Footer"; // plasmic-import: zRW2oir-oc_kkO/component

import { useScreenVariants as useScreenVariantsmDHiN98BnmUB } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: M-DHiN98BNM_uB/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_saa_s_website.module.css"; // plasmic-import: aLuc5FJ4muSJEjCmsd2jqk/projectcss
import sty from "./PlasmicAboutUs.module.css"; // plasmic-import: 9IeeU-alEyAui_/css

import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: wzhID7krtZ3VKP/icon
import ArrowRightsvgIcon from "./icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: AAVZDp-i71oUAH/icon
import IconIcon from "./icons/PlasmicIcon__Icon"; // plasmic-import: WmqIwdUBQe_wjf/icon
import corinneKutzTMi2R5NfoUnsplashjpgBUeErTI0PfH7 from "./images/corinneKutzTMi2R5NfoUnsplashjpg.jpeg"; // plasmic-import: BUeErT_i0PF-H7/picture
import brookeCagleWhwyBmtn30UnsplashjpgOcndnYgywBlG3T from "./images/brookeCagleWhwyBmtn30Unsplashjpg.jpeg"; // plasmic-import: OcndnYgywBlG3T/picture
import about2JpgSSVf3Pzs9MT38T from "./images/about2Jpg.jpeg"; // plasmic-import: sSVf3Pzs9mT38T/picture
import reading9255891920JpgD0GMyWUf9HmCng from "./images/reading9255891920Jpg.jpeg"; // plasmic-import: d0gMyWUf9HmCng/picture

export type PlasmicAboutUs__VariantMembers = {};
export type PlasmicAboutUs__VariantsArgs = {};
type VariantPropType = keyof PlasmicAboutUs__VariantsArgs;
export const PlasmicAboutUs__VariantProps = new Array<VariantPropType>();

export type PlasmicAboutUs__ArgsType = {};
type ArgPropType = keyof PlasmicAboutUs__ArgsType;
export const PlasmicAboutUs__ArgProps = new Array<ArgPropType>();

export type PlasmicAboutUs__OverridesType = {
  root?: p.Flex<"div">;
  header2?: p.Flex<typeof Header2>;
  pageBanner?: p.Flex<"div">;
  columns?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  features?: p.Flex<"section">;
  container4?: p.Flex<"div">;
  outerRow2?: p.Flex<"div">;
  row2?: p.Flex<"div">;
  container5?: p.Flex<"div">;
  outerRow3?: p.Flex<"div">;
  row4?: p.Flex<"div">;
  link?: p.Flex<"a">;
  container6?: p.Flex<"div">;
  outerRow4?: p.Flex<"div">;
  row3?: p.Flex<"div">;
  heroSection?: p.Flex<typeof HeroSection>;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultAboutUsProps {
  className?: string;
}

function PlasmicAboutUs__RenderFunc(props: {
  variants: PlasmicAboutUs__VariantsArgs;
  args: PlasmicAboutUs__ArgsType;
  overrides: PlasmicAboutUs__OverridesType;

  forNode?: string;
}) {
  const { variants, overrides, forNode } = props;

  const $ctx = ph.useDataEnv?.() || {};
  const args = React.useMemo(() => Object.assign({}, props.args), [props.args]);

  const $props = {
    ...args,
    ...variants
  };

  const currentUser = p.useCurrentUser?.() || {};

  const [$queries, setDollarQueries] = React.useState({});

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantsmDHiN98BnmUB()
  });

  return (
    <React.Fragment>
      {}

      <div className={projectcss.plasmic_page_wrapper}>
        <p.Stack
          as={"div"}
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          hasGap={true}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            projectcss.plasmic_default_styles,
            projectcss.plasmic_mixins,
            projectcss.plasmic_tokens,
            sty.root
          )}
        >
          <div className={classNames(projectcss.all, sty.freeBox__k6Hnf)}>
            <Header2
              data-plasmic-name={"header2"}
              data-plasmic-override={overrides.header2}
              className={classNames("__wab_instance", sty.header2)}
            />
          </div>

          <div
            data-plasmic-name={"pageBanner"}
            data-plasmic-override={overrides.pageBanner}
            className={classNames(projectcss.all, sty.pageBanner)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__mAod)}>
              <p.Stack
                as={"div"}
                data-plasmic-name={"columns"}
                data-plasmic-override={overrides.columns}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns)}
              >
                <div className={classNames(projectcss.all, sty.column__qwOHa)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__mwDc6)}
                  >
                    <h1
                      data-plasmic-name={"h1"}
                      data-plasmic-override={overrides.h1}
                      className={classNames(
                        projectcss.all,
                        projectcss.h1,
                        projectcss.__wab_text,
                        sty.h1
                      )}
                    >
                      {"About us"}
                    </h1>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__gOlz
                      )}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                      }
                    </div>
                  </p.Stack>
                </div>

                <div className={classNames(projectcss.all, sty.column___4CAUh)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__pgznW)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={"100%" as const}
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={"lazy" as const}
                    src={{
                      src: corinneKutzTMi2R5NfoUnsplashjpgBUeErTI0PfH7,
                      fullWidth: 1920,
                      fullHeight: 1280,
                      aspectRatio: undefined
                    }}
                  />
                </div>
              </p.Stack>
            </div>
          </div>

          <div className={classNames(projectcss.all, sty.freeBox__capvV)}>
            {(
              hasVariant(globalVariants, "screen", "mobileOnly") ? true : true
            ) ? (
              <section
                data-plasmic-name={"features"}
                data-plasmic-override={overrides.features}
                className={classNames(projectcss.all, sty.features)}
              >
                <div className={classNames(projectcss.all, sty.column__kCtjy)}>
                  <h2
                    className={classNames(
                      projectcss.all,
                      projectcss.h2,
                      projectcss.__wab_text,
                      sty.h2__vLevc
                    )}
                  >
                    {hasVariant(globalVariants, "screen", "mobileOnly")
                      ? "WHY CHOOSE US"
                      : "WHY CHOOSE US"}
                  </h2>

                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__eFuKg
                    )}
                  >
                    {
                      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \nLorem Ipsum has been the industry's standard dummy text ever since the 1500s"
                    }
                  </div>

                  <div
                    data-plasmic-name={"container4"}
                    data-plasmic-override={overrides.container4}
                    className={classNames(projectcss.all, sty.container4)}
                  >
                    <div
                      data-plasmic-name={"outerRow2"}
                      data-plasmic-override={overrides.outerRow2}
                      className={classNames(projectcss.all, sty.outerRow2)}
                    >
                      <div
                        data-plasmic-name={"row2"}
                        data-plasmic-override={overrides.row2}
                        className={classNames(projectcss.all, sty.row2)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column___5Kd6
                          )}
                        >
                          {true ? (
                            <p.Stack
                              as={"div"}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__mny3W
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox___310Lv
                                )}
                              />

                              <h3
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h3,
                                  projectcss.__wab_text,
                                  sty.h3__qqDpH
                                )}
                              >
                                {hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? "Some value proposition of your service."
                                  : "Some value proposition of your service."}
                              </h3>

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text___41Er
                                )}
                              >
                                {hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                  : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                              </div>

                              <Button
                                className={classNames(
                                  "__wab_instance",
                                  sty.button___2Kiaa
                                )}
                                color={"blue" as const}
                                endIcon={
                                  <ArrowRightsvgIcon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg__g4JCd
                                    )}
                                    role={"img"}
                                  />
                                }
                                shape={"rounded" as const}
                                showEndIcon={true}
                              >
                                {"Learn more"}
                              </Button>
                            </p.Stack>
                          ) : null}
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__ub0O
                          )}
                        >
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__aoi7W)}
                            displayHeight={"400px" as const}
                            displayMaxHeight={"none" as const}
                            displayMaxWidth={"none" as const}
                            displayMinHeight={"0" as const}
                            displayMinWidth={"0" as const}
                            displayWidth={"400px" as const}
                            loading={"lazy" as const}
                            src={{
                              src: brookeCagleWhwyBmtn30UnsplashjpgOcndnYgywBlG3T,
                              fullWidth: 1920,
                              fullHeight: 1280,
                              aspectRatio: undefined
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div
                    data-plasmic-name={"container5"}
                    data-plasmic-override={overrides.container5}
                    className={classNames(projectcss.all, sty.container5)}
                  >
                    {true ? (
                      <div
                        data-plasmic-name={"outerRow3"}
                        data-plasmic-override={overrides.outerRow3}
                        className={classNames(projectcss.all, sty.outerRow3)}
                      >
                        <div
                          data-plasmic-name={"row4"}
                          data-plasmic-override={overrides.row4}
                          className={classNames(projectcss.all, sty.row4)}
                        >
                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__s2RGv
                            )}
                          >
                            <p.PlasmicImg
                              alt={""}
                              className={classNames(sty.img__bb32M)}
                              displayHeight={"auto" as const}
                              displayMaxHeight={"none" as const}
                              displayMaxWidth={
                                hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? ("100%" as const)
                                  : ("100%" as const)
                              }
                              displayMinHeight={"0" as const}
                              displayMinWidth={"0" as const}
                              displayWidth={"auto" as const}
                              loading={
                                hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? ("lazy" as const)
                                  : ("lazy" as const)
                              }
                              src={
                                hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? {
                                      src: about2JpgSSVf3Pzs9MT38T,
                                      fullWidth: 570,
                                      fullHeight: 650,
                                      aspectRatio: undefined
                                    }
                                  : {
                                      src: about2JpgSSVf3Pzs9MT38T,
                                      fullWidth: 570,
                                      fullHeight: 650,
                                      aspectRatio: undefined
                                    }
                              }
                            />
                          </div>

                          <div
                            className={classNames(
                              projectcss.all,
                              sty.column__viOh
                            )}
                          >
                            <h2
                              className={classNames(
                                projectcss.all,
                                projectcss.h2,
                                projectcss.__wab_text,
                                sty.h2__fRfBx
                              )}
                            >
                              {hasVariant(
                                globalVariants,
                                "screen",
                                "mobileOnly"
                              )
                                ? "We Execute Our Ideas \nThe Start To Finish."
                                : "We Execute Our Ideas \nThe Start To Finish."}
                            </h2>

                            <div
                              className={classNames(
                                projectcss.all,
                                projectcss.__wab_text,
                                sty.text__m2Qs1
                              )}
                            >
                              {
                                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged."
                              }
                            </div>

                            <p.Stack
                              as={"a"}
                              data-plasmic-name={"link"}
                              data-plasmic-override={overrides.link}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                projectcss.a,
                                sty.link
                              )}
                            >
                              {false ? (
                                <IconIcon
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg__s1Dd
                                  )}
                                  role={"img"}
                                />
                              ) : null}

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text__vqjXf
                                )}
                              >
                                {"LEARN More"}
                              </div>

                              {false ? (
                                <IconIcon
                                  className={classNames(
                                    projectcss.all,
                                    sty.svg___8RARr
                                  )}
                                  role={"img"}
                                />
                              ) : null}
                            </p.Stack>
                          </div>
                        </div>
                      </div>
                    ) : null}
                  </div>

                  <div
                    data-plasmic-name={"container6"}
                    data-plasmic-override={overrides.container6}
                    className={classNames(projectcss.all, sty.container6)}
                  >
                    <div
                      data-plasmic-name={"outerRow4"}
                      data-plasmic-override={overrides.outerRow4}
                      className={classNames(projectcss.all, sty.outerRow4)}
                    >
                      <div
                        data-plasmic-name={"row3"}
                        data-plasmic-override={overrides.row3}
                        className={classNames(projectcss.all, sty.row3)}
                      >
                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__y3Lhe
                          )}
                        >
                          <p.PlasmicImg
                            alt={""}
                            className={classNames(sty.img__h260)}
                            displayHeight={"400px" as const}
                            displayMaxHeight={"none" as const}
                            displayMaxWidth={"none" as const}
                            displayMinHeight={"0" as const}
                            displayMinWidth={"0" as const}
                            displayWidth={"400px" as const}
                            loading={"lazy" as const}
                            src={{
                              src: reading9255891920JpgD0GMyWUf9HmCng,
                              fullWidth: 1920,
                              fullHeight: 1280,
                              aspectRatio: undefined
                            }}
                          />
                        </div>

                        <div
                          className={classNames(
                            projectcss.all,
                            sty.column__wqydg
                          )}
                        >
                          {true ? (
                            <p.Stack
                              as={"div"}
                              hasGap={true}
                              className={classNames(
                                projectcss.all,
                                sty.freeBox__emvGs
                              )}
                            >
                              <div
                                className={classNames(
                                  projectcss.all,
                                  sty.freeBox__aktQt
                                )}
                              />

                              <h3
                                className={classNames(
                                  projectcss.all,
                                  projectcss.h3,
                                  projectcss.__wab_text,
                                  sty.h3__smUro
                                )}
                              >
                                {hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? "Some value proposition of your service."
                                  : "Some value proposition of your service."}
                              </h3>

                              <div
                                className={classNames(
                                  projectcss.all,
                                  projectcss.__wab_text,
                                  sty.text___1Cpeo
                                )}
                              >
                                {hasVariant(
                                  globalVariants,
                                  "screen",
                                  "mobileOnly"
                                )
                                  ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
                                  : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
                              </div>

                              <Button
                                className={classNames(
                                  "__wab_instance",
                                  sty.button__cnC6K
                                )}
                                color={"blue" as const}
                                endIcon={
                                  <ArrowRightsvgIcon
                                    className={classNames(
                                      projectcss.all,
                                      sty.svg___3HpMi
                                    )}
                                    role={"img"}
                                  />
                                }
                                shape={"rounded" as const}
                                showEndIcon={true}
                              >
                                {"Learn more"}
                              </Button>
                            </p.Stack>
                          ) : null}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            ) : null}

            <HeroSection
              data-plasmic-name={"heroSection"}
              data-plasmic-override={overrides.heroSection}
              className={classNames("__wab_instance", sty.heroSection)}
            />
          </div>

          <Footer
            data-plasmic-name={"footer"}
            data-plasmic-override={overrides.footer}
            className={classNames("__wab_instance", sty.footer)}
          />
        </p.Stack>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "header2",
    "pageBanner",
    "columns",
    "h1",
    "features",
    "container4",
    "outerRow2",
    "row2",
    "container5",
    "outerRow3",
    "row4",
    "link",
    "container6",
    "outerRow4",
    "row3",
    "heroSection",
    "footer"
  ],
  header2: ["header2"],
  pageBanner: ["pageBanner", "columns", "h1"],
  columns: ["columns", "h1"],
  h1: ["h1"],
  features: [
    "features",
    "container4",
    "outerRow2",
    "row2",
    "container5",
    "outerRow3",
    "row4",
    "link",
    "container6",
    "outerRow4",
    "row3"
  ],
  container4: ["container4", "outerRow2", "row2"],
  outerRow2: ["outerRow2", "row2"],
  row2: ["row2"],
  container5: ["container5", "outerRow3", "row4", "link"],
  outerRow3: ["outerRow3", "row4", "link"],
  row4: ["row4", "link"],
  link: ["link"],
  container6: ["container6", "outerRow4", "row3"],
  outerRow4: ["outerRow4", "row3"],
  row3: ["row3"],
  heroSection: ["heroSection"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header2: typeof Header2;
  pageBanner: "div";
  columns: "div";
  h1: "h1";
  features: "section";
  container4: "div";
  outerRow2: "div";
  row2: "div";
  container5: "div";
  outerRow3: "div";
  row4: "div";
  link: "a";
  container6: "div";
  outerRow4: "div";
  row3: "div";
  heroSection: typeof HeroSection;
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAboutUs__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAboutUs__VariantsArgs;
    args?: PlasmicAboutUs__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAboutUs__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicAboutUs__ArgsType,
      ReservedPropsType
    > &
    /* Specify overrides for each element directly as props*/ Omit<
      NodeOverridesType<T>,
      ReservedPropsType | VariantPropType | ArgPropType
    > &
    /* Specify props for the root element*/ Omit<
      Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
      ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
    >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = React.useMemo(
      () =>
        deriveRenderOpts(props, {
          name: nodeName,
          descendantNames: [...PlasmicDescendants[nodeName]],
          internalArgPropNames: PlasmicAboutUs__ArgProps,
          internalVariantPropNames: PlasmicAboutUs__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicAboutUs__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAboutUs";
  } else {
    func.displayName = `PlasmicAboutUs.${nodeName}`;
  }
  return func;
}

export const PlasmicAboutUs = Object.assign(
  // Top-level PlasmicAboutUs renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header2: makeNodeComponent("header2"),
    pageBanner: makeNodeComponent("pageBanner"),
    columns: makeNodeComponent("columns"),
    h1: makeNodeComponent("h1"),
    features: makeNodeComponent("features"),
    container4: makeNodeComponent("container4"),
    outerRow2: makeNodeComponent("outerRow2"),
    row2: makeNodeComponent("row2"),
    container5: makeNodeComponent("container5"),
    outerRow3: makeNodeComponent("outerRow3"),
    row4: makeNodeComponent("row4"),
    link: makeNodeComponent("link"),
    container6: makeNodeComponent("container6"),
    outerRow4: makeNodeComponent("outerRow4"),
    row3: makeNodeComponent("row3"),
    heroSection: makeNodeComponent("heroSection"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicAboutUs
    internalVariantProps: PlasmicAboutUs__VariantProps,
    internalArgProps: PlasmicAboutUs__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicAboutUs;
/* prettier-ignore-end */