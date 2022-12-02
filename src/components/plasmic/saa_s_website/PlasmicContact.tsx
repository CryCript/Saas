// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: aLuc5FJ4muSJEjCmsd2jqk
// Component: s0fr9Sxe-LMR4s
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
import Header from "../../Header"; // plasmic-import: Cdu9yYco4mGqIQ/component
import TextInput from "../../TextInput"; // plasmic-import: -W1DEy09z-QHgU/component
import Select from "../../Select"; // plasmic-import: Ty2muMsXFBuOUP/component
import Select__Option from "../../Select__Option"; // plasmic-import: ZNvdGnUoaq3NRC/component
import Checkbox from "../../Checkbox"; // plasmic-import: WLGF1v21nHCSzM/component
import Button from "../../Button"; // plasmic-import: DBhKpuopLwsn-/component
import Footer from "../../Footer"; // plasmic-import: zRW2oir-oc_kkO/component

import { useScreenVariants as useScreenVariantsmDHiN98BnmUB } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: M-DHiN98BNM_uB/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_saa_s_website.module.css"; // plasmic-import: aLuc5FJ4muSJEjCmsd2jqk/projectcss
import sty from "./PlasmicContact.module.css"; // plasmic-import: s0fr9Sxe-LMR4s/css

import SearchsvgIcon from "./icons/PlasmicIcon__Searchsvg"; // plasmic-import: BphLfuHhRdflp4/icon
import ChecksvgIcon from "./icons/PlasmicIcon__Checksvg"; // plasmic-import: wzhID7krtZ3VKP/icon
import ArrowRightsvgIcon from "./icons/PlasmicIcon__ArrowRightsvg"; // plasmic-import: AAVZDp-i71oUAH/icon
import stephenPhillipsHostreviewsCoUk3Mhgvrk4TjMUnsplashjpgOAmXgg7HdmFDeY from "./images/stephenPhillipsHostreviewsCoUk3Mhgvrk4TjMUnsplashjpg.jpeg"; // plasmic-import: oAmXGG7HdmFDeY/picture
import corinneKutzTMi2R5NfoUnsplashjpgBUeErTI0PfH7 from "./images/corinneKutzTMi2R5NfoUnsplashjpg.jpeg"; // plasmic-import: BUeErT_i0PF-H7/picture

export type PlasmicContact__VariantMembers = {};
export type PlasmicContact__VariantsArgs = {};
type VariantPropType = keyof PlasmicContact__VariantsArgs;
export const PlasmicContact__VariantProps = new Array<VariantPropType>();

export type PlasmicContact__ArgsType = {};
type ArgPropType = keyof PlasmicContact__ArgsType;
export const PlasmicContact__ArgProps = new Array<ArgPropType>();

export type PlasmicContact__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<typeof Header>;
  pageBanner?: p.Flex<"div">;
  h1?: p.Flex<"h1">;
  mainSection?: p.Flex<"div">;
  container4?: p.Flex<"div">;
  h3?: p.Flex<"h3">;
  select?: p.Flex<typeof Select>;
  textarea?: p.Flex<"textarea">;
  checkbox?: p.Flex<typeof Checkbox>;
  button?: p.Flex<typeof Button>;
  svg?: p.Flex<"svg">;
  footer?: p.Flex<typeof Footer>;
};

export interface DefaultContactProps {
  className?: string;
}

function PlasmicContact__RenderFunc(props: {
  variants: PlasmicContact__VariantsArgs;
  args: PlasmicContact__ArgsType;
  overrides: PlasmicContact__OverridesType;

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
          <Header
            data-plasmic-name={"header"}
            data-plasmic-override={overrides.header}
            className={classNames("__wab_instance", sty.header)}
          />

          <div
            data-plasmic-name={"pageBanner"}
            data-plasmic-override={overrides.pageBanner}
            className={classNames(projectcss.all, sty.pageBanner)}
          >
            <div className={classNames(projectcss.all, sty.freeBox__keCst)}>
              <p.Stack
                as={"div"}
                hasGap={true}
                className={classNames(projectcss.all, sty.columns___6KR7X)}
              >
                <div className={classNames(projectcss.all, sty.column__bLbMl)}>
                  <p.Stack
                    as={"div"}
                    hasGap={true}
                    className={classNames(projectcss.all, sty.freeBox__g9LG)}
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
                      {"Contact Us"}
                    </h1>

                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__cuxZt
                      )}
                    >
                      {
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,"
                      }
                    </div>
                  </p.Stack>
                </div>

                <div className={classNames(projectcss.all, sty.column__vpX9)}>
                  <p.PlasmicImg
                    alt={""}
                    className={classNames(sty.img__g7Cwh)}
                    displayHeight={"auto" as const}
                    displayMaxHeight={"none" as const}
                    displayMaxWidth={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? ("100%" as const)
                        : ("100%" as const)
                    }
                    displayMinHeight={"0" as const}
                    displayMinWidth={"0" as const}
                    displayWidth={"auto" as const}
                    loading={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? ("lazy" as const)
                        : ("lazy" as const)
                    }
                    src={
                      hasVariant(globalVariants, "screen", "mobileOnly")
                        ? {
                            src: stephenPhillipsHostreviewsCoUk3Mhgvrk4TjMUnsplashjpgOAmXgg7HdmFDeY,
                            fullWidth: 1920,
                            fullHeight: 1280,
                            aspectRatio: undefined
                          }
                        : {
                            src: stephenPhillipsHostreviewsCoUk3Mhgvrk4TjMUnsplashjpgOAmXgg7HdmFDeY,
                            fullWidth: 1920,
                            fullHeight: 1280,
                            aspectRatio: undefined
                          }
                    }
                  />
                </div>
              </p.Stack>
            </div>
          </div>

          <div
            data-plasmic-name={"mainSection"}
            data-plasmic-override={overrides.mainSection}
            className={classNames(projectcss.all, sty.mainSection)}
          >
            <div className={classNames(projectcss.all, sty.columns___6JiP)}>
              <div className={classNames(projectcss.all, sty.column__qGaLo)}>
                <div
                  data-plasmic-name={"container4"}
                  data-plasmic-override={overrides.container4}
                  className={classNames(projectcss.all, sty.container4)}
                >
                  <h3
                    data-plasmic-name={"h3"}
                    data-plasmic-override={overrides.h3}
                    className={classNames(
                      projectcss.all,
                      projectcss.h3,
                      projectcss.__wab_text,
                      sty.h3
                    )}
                  >
                    {"Get in touch"}
                  </h3>

                  <label
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.label___3ABcb
                    )}
                  >
                    {"Name"}
                  </label>

                  <TextInput
                    className={classNames(
                      "__wab_instance",
                      sty.textInput__i6KPm
                    )}
                    placeholder={" " as const}
                  />

                  <label
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.label___2L8I2
                    )}
                  >
                    {"Email"}
                  </label>

                  <TextInput
                    className={classNames(
                      "__wab_instance",
                      sty.textInput__kbuFa
                    )}
                    placeholder={" " as const}
                  />

                  <label
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.label__apwNd
                    )}
                  >
                    {"Subject"}
                  </label>

                  <Select
                    data-plasmic-name={"select"}
                    data-plasmic-override={overrides.select}
                    className={classNames("__wab_instance", sty.select)}
                    placeholder={"Please select"}
                  />

                  <label
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.label__lpuZr
                    )}
                  >
                    {"Message"}
                  </label>

                  <textarea
                    data-plasmic-name={"textarea"}
                    data-plasmic-override={overrides.textarea}
                    className={classNames(
                      projectcss.all,
                      projectcss.textarea,
                      sty.textarea
                    )}
                    value={"" as const}
                  />

                  <Checkbox
                    data-plasmic-name={"checkbox"}
                    data-plasmic-override={overrides.checkbox}
                    className={classNames("__wab_instance", sty.checkbox)}
                  >
                    <div
                      className={classNames(
                        projectcss.all,
                        projectcss.__wab_text,
                        sty.text__gLgRj
                      )}
                    >
                      {hasVariant(globalVariants, "screen", "mobileOnly")
                        ? "I understand that this form is \nstoring my submitted information \nso I can be contacted."
                        : "I understand that this form is storing"}
                    </div>
                  </Checkbox>

                  {true ? (
                    <div
                      className={classNames(projectcss.all, sty.freeBox__dzOAc)}
                    >
                      <Button
                        data-plasmic-name={"button"}
                        data-plasmic-override={overrides.button}
                        className={classNames("__wab_instance", sty.button)}
                        color={"blue" as const}
                        endIcon={
                          <ArrowRightsvgIcon
                            data-plasmic-name={"svg"}
                            data-plasmic-override={overrides.svg}
                            className={classNames(projectcss.all, sty.svg)}
                            role={"img"}
                          />
                        }
                        shape={"rounded" as const}
                        showEndIcon={true}
                      >
                        {"Start Now"}
                      </Button>
                    </div>
                  ) : null}
                </div>
              </div>

              <div className={classNames(projectcss.all, sty.column__sOf9S)}>
                <p.PlasmicImg
                  alt={""}
                  className={classNames(sty.img__uZrsl)}
                  displayHeight={"100%" as const}
                  displayMaxHeight={"none" as const}
                  displayMaxWidth={"100%" as const}
                  displayMinHeight={"0" as const}
                  displayMinWidth={"0" as const}
                  displayWidth={"100%" as const}
                  loading={"lazy" as const}
                  src={{
                    src: corinneKutzTMi2R5NfoUnsplashjpgBUeErTI0PfH7,
                    fullWidth: 1920,
                    fullHeight: 1280,
                    aspectRatio: undefined
                  }}
                />
              </div>
            </div>
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
    "header",
    "pageBanner",
    "h1",
    "mainSection",
    "container4",
    "h3",
    "select",
    "textarea",
    "checkbox",
    "button",
    "svg",
    "footer"
  ],
  header: ["header"],
  pageBanner: ["pageBanner", "h1"],
  h1: ["h1"],
  mainSection: [
    "mainSection",
    "container4",
    "h3",
    "select",
    "textarea",
    "checkbox",
    "button",
    "svg"
  ],
  container4: [
    "container4",
    "h3",
    "select",
    "textarea",
    "checkbox",
    "button",
    "svg"
  ],
  h3: ["h3"],
  select: ["select"],
  textarea: ["textarea"],
  checkbox: ["checkbox"],
  button: ["button", "svg"],
  svg: ["svg"],
  footer: ["footer"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: typeof Header;
  pageBanner: "div";
  h1: "h1";
  mainSection: "div";
  container4: "div";
  h3: "h3";
  select: typeof Select;
  textarea: "textarea";
  checkbox: typeof Checkbox;
  button: typeof Button;
  svg: "svg";
  footer: typeof Footer;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicContact__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicContact__VariantsArgs;
    args?: PlasmicContact__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicContact__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    /* Specify args directly as props*/ Omit<
      PlasmicContact__ArgsType,
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
          internalArgPropNames: PlasmicContact__ArgProps,
          internalVariantPropNames: PlasmicContact__VariantProps
        }),
      [props, nodeName]
    );

    return PlasmicContact__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicContact";
  } else {
    func.displayName = `PlasmicContact.${nodeName}`;
  }
  return func;
}

export const PlasmicContact = Object.assign(
  // Top-level PlasmicContact renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    pageBanner: makeNodeComponent("pageBanner"),
    h1: makeNodeComponent("h1"),
    mainSection: makeNodeComponent("mainSection"),
    container4: makeNodeComponent("container4"),
    h3: makeNodeComponent("h3"),
    select: makeNodeComponent("select"),
    textarea: makeNodeComponent("textarea"),
    checkbox: makeNodeComponent("checkbox"),
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    footer: makeNodeComponent("footer"),

    // Metadata about props expected for PlasmicContact
    internalVariantProps: PlasmicContact__VariantProps,
    internalArgProps: PlasmicContact__ArgProps,

    // Page metadata
    pageMetadata: {
      title: "",
      description: "",
      ogImageSrc: "",
      canonical: ""
    }
  }
);

export default PlasmicContact;
/* prettier-ignore-end */
