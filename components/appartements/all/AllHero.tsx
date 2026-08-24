import { Button } from "@/components/ui/button";
import {
  Combobox,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxInput,
  ComboboxItem,
  ComboboxList,
} from "@/components/ui/combobox";
import React from "react";

export const AllAppartmentHero = () => {
  return (
    <div className="mt-(--nav-height) w-full py-8 flex flex-col gap-4">
      <div className="flex flex-col gap-3">
        <h1 className="text-4xl text-secondary-foreground font-bold">
          All Apartments
        </h1>
        <p className="text-muted-foreground w-full md:w-[50%]">
          Experience curated luxury living in the heart of Cameroon. Our
          selection of premium apartments offers modern amenities, breathtaking
          views, and the warm hospitality of West Africa.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4 items-end py-6 border-y border-border mt-7">
        <div className="flex flex-col gap-1">
          <span className="text-xs text-muted-foreground">Location</span>
          <Combobox
          // value={filters.region}
          // onInputValueChange={(value) => updateFilter("region", value)}
          // items={regions}
          >
            <ComboboxInput className={"h-10"} placeholder="Select a Region" />
            <ComboboxContent>
              <ComboboxEmpty>No items found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
        <div className="flex flex-col gap-1">
          <span className="text-xs text-muted-foreground">Price Range</span>
          <Combobox
          // value={filters.priceRange}
          // onInputValueChange={(value) => updateFilter("priceRange", value)}
          // items={priceRanges}
          >
            <ComboboxInput
              className={"h-10"}
              placeholder="Select a price range"
            />
            <ComboboxContent>
              <ComboboxEmpty>No items found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item.replaceAll("-", " ")}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>

        <div className="flex flex-col gap-1">
          <span className="text-xs text-muted-foreground">Type</span>
          <Combobox
          // value={filters.collectionId}
          // onInputValueChange={(value) => updateFilter("collectionId", value)}
          // items={collections}
          >
            <ComboboxInput
              className={"h-10"}
              placeholder="Select a collection"
            />
            <ComboboxContent>
              <ComboboxEmpty>No items found.</ComboboxEmpty>
              <ComboboxList>
                {(item) => (
                  <ComboboxItem key={item} value={item}>
                    {item.replaceAll("-", " ")}
                  </ComboboxItem>
                )}
              </ComboboxList>
            </ComboboxContent>
          </Combobox>
        </div>
        <Button
          type="button"
          variant="outline"
          className="h-10"
          //   onClick={clearFilters}
        >
          Clear all filters
        </Button>
      </div>
    </div>
  );
};
