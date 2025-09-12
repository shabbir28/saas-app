import CompanionCard from "@/components/CompanionCard";
import { getAllCompanions } from "@/lib/actions/companion.actions";
import { getSubjectColor } from "@/lib/utils";
import SubjectFilter from "@/components/SubjectFilter";
import SearchInput from "@/components/SearchInput";

const CompanionsLibrary = async ({ searchParams }: SearchParams) => {
  const filters = await searchParams;
  const subject = filters.subject ? filters.subject : "";
  const topic = filters.topic ? filters.topic : "";

  const companions = await getAllCompanions({ subject, topic });
  console.log(companions);

  return (
    <main className="p-6">
      {/* Header */}
      <section className="flex justify-between items-center gap-4 max-sm:flex-col">
        <h1 className="text-2xl font-bold">Companion Library</h1>
        <div className="flex gap-4">
          <SearchInput />
          <SubjectFilter />
        </div>
      </section>

      {/* Grid of Cards */}
      <section
        className="
          grid 
          gap-6 
          mt-8
          sm:grid-cols-2 
          lg:grid-cols-3
        "
      >
        {companions.map((companion) => (
          <div
            key={companion.id}
            className="
              flex flex-col 
              rounded-2xl 
              shadow-md 
              hover:shadow-lg 
              transition 
              bg-white 
              overflow-hidden
              h-[280px]     /* fix height */
            "
          >
            <CompanionCard
              {...companion}
              color={getSubjectColor(companion.subject)}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default CompanionsLibrary;
