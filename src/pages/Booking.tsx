import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Calendar } from "@/components/ui/calendar";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Clock, MapPin, Video } from "lucide-react";
import { format } from "date-fns";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState<string>();
  const [duration, setDuration] = useState<string>("45m");

  const timeSlots = [
    "1:30pm", "2:15pm", "3:00pm", "3:45pm", "4:30pm",
    "5:15pm", "6:00pm", "6:45pm", "7:30pm", "8:15pm"
  ];

  const durations = ["15m", "30m", "45m", "1h"];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Let's <span className="text-primary">talk business</span>.
            </h1>
          </div>

          {/* Booking Interface */}
          <div className="grid md:grid-cols-[350px_1fr_300px] gap-6">
            {/* Left Panel - Meeting Details */}
            <Card className="p-6 bg-card border-border">
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold text-lg mb-2">Workforce One Solutions</h3>
                  <p className="text-sm text-muted-foreground">Schedule a consultation</p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-primary" />
                    <div className="flex gap-2">
                      {durations.map((dur) => (
                        <button
                          key={dur}
                          onClick={() => setDuration(dur)}
                          className={`px-3 py-1 rounded text-sm border ${
                            duration === dur
                              ? "bg-primary text-primary-foreground border-primary"
                              : "bg-background border-border hover:border-primary"
                          }`}
                        >
                          {dur}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Video className="w-5 h-5 text-primary" />
                    <span className="text-sm">Google Meet</span>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-primary" />
                    <span className="text-sm">Remote / In-Person</span>
                  </div>
                </div>
              </div>
            </Card>

            {/* Center Panel - Calendar */}
            <Card className="p-6 bg-card border-border">
              <div className="flex justify-center">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  className="pointer-events-auto"
                  disabled={(date) => date < new Date()}
                />
              </div>
            </Card>

            {/* Right Panel - Time Slots */}
            <Card className="p-6 bg-card border-border">
              <div className="space-y-4">
                <div className="text-center pb-4 border-b border-border">
                  <h3 className="font-semibold">
                    {selectedDate ? format(selectedDate, "EEE dd") : "Select Date"}
                  </h3>
                  <div className="flex justify-center gap-2 mt-2">
                    <button className="px-3 py-1 text-xs rounded border border-border hover:bg-accent">
                      12h
                    </button>
                    <button className="px-3 py-1 text-xs rounded border border-border hover:bg-accent">
                      24h
                    </button>
                  </div>
                </div>

                <div className="space-y-2 max-h-[400px] overflow-y-auto">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedTime(time)}
                      className={`w-full px-4 py-2 rounded border text-sm ${
                        selectedTime === time
                          ? "bg-primary text-primary-foreground border-primary"
                          : "bg-background border-border hover:border-primary hover:bg-accent"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                {selectedDate && selectedTime && (
                  <Button className="w-full mt-4">
                    Confirm Booking
                  </Button>
                )}
              </div>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Booking;
