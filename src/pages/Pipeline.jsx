import {
  DragDropContext,
  Droppable,
  Draggable,
} from "@hello-pangea/dnd";

import {
  useEffect,
  useState,
} from "react";

import {
  getLeads,
  updateLeadStatus,
} from "../api/leadApi";

import toast from "react-hot-toast";

function Pipeline() {
  const [leads, setLeads] =
    useState([]);

  const columns = [
    "New Lead",
    "Quotation Sent",
    "Negotiation",
    "Won",
  ];

  useEffect(() => {
    fetchLeads();
  }, []);

  const fetchLeads =
    async () => {
      try {
        const res =
          await getLeads();

        setLeads(
          res.data
        );
      } catch (error) {
        console.log(error);
      }
    };

  const onDragEnd =
    async (result) => {
      if (
        !result.destination
      )
        return;

      const leadId =
        result.draggableId;

      const newStatus =
        result.destination
          .droppableId;

      try {
        await updateLeadStatus(
          leadId,
          newStatus
        );

        toast.success(
          "Pipeline Updated 🚀"
        );

        fetchLeads();
      } catch (error) {
        toast.error(
          "Failed to update"
        );
      }
    };

  return (
    <div>
      {/* Header */}
      <div className="mb-10">
        <h1 className="text-5xl font-bold">
          Sales Pipeline
        </h1>

        <p className="text-slate-400 mt-2">
          Drag and manage leads visually
        </p>
      </div>

      <DragDropContext
        onDragEnd={
          onDragEnd
        }
      >
        <div className="grid grid-cols-4 gap-6">

          {columns.map(
            (column) => (
              <Droppable
                key={column}
                droppableId={
                  column
                }
              >
                {(provided) => (
                  <div
                    ref={
                      provided.innerRef
                    }
                    {...provided.droppableProps}
                    className="bg-[#111827] border border-slate-800 rounded-[35px] p-5 min-h-[650px]"
                  >
                    <div className="flex items-center justify-between mb-5">
                      <h2 className="text-xl font-semibold">
                        {column}
                      </h2>

                      <span className="bg-slate-900 text-slate-300 px-3 py-1 rounded-xl text-sm">
                        {
                          leads.filter(
                            (
                              lead
                            ) =>
                              lead.status ===
                              column
                          ).length
                        }
                      </span>
                    </div>

                    <div className="space-y-4">

                      {leads
                        .filter(
                          (
                            lead
                          ) =>
                            lead.status ===
                            column
                        )
                        .map(
                          (
                            lead,
                            index
                          ) => (
                            <Draggable
                              key={
                                lead._id
                              }
                              draggableId={
                                lead._id
                              }
                              index={
                                index
                              }
                            >
                              {(
                                provided
                              ) => (
                                <div
                                  ref={
                                    provided.innerRef
                                  }
                                  {...provided.draggableProps}
                                  {...provided.dragHandleProps}
                                  className="bg-slate-900 border border-slate-700 rounded-3xl p-5 hover:border-cyan-500 transition-all cursor-pointer"
                                >
                                  <h3 className="font-semibold text-lg">
                                    {
                                      lead.company
                                    }
                                  </h3>

                                  <p className="text-slate-400 mt-1">
                                    {
                                      lead.contact
                                    }
                                  </p>

                                  <div className="flex justify-between items-center mt-5">

                                    <span
                                      className={`px-4 py-2 rounded-full text-sm ${
                                        lead.priority ===
                                        "High"
                                          ? "bg-red-500/20 text-red-400"
                                          : lead.priority ===
                                            "Medium"
                                          ? "bg-yellow-500/20 text-yellow-400"
                                          : "bg-green-500/20 text-green-400"
                                      }`}
                                    >
                                      {
                                        lead.priority
                                      }
                                    </span>

                                    <p className="text-xs text-slate-500">
                                      Drag →
                                    </p>

                                  </div>
                                </div>
                              )}
                            </Draggable>
                          )
                        )}

                      {
                        provided.placeholder
                      }

                    </div>
                  </div>
                )}
              </Droppable>
            )
          )}

        </div>
      </DragDropContext>
    </div>
  );
}

export default Pipeline;