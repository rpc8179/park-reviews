#require 'curses'
class ParksController < ApplicationController
  def index
      @parks = Park.all
      #win = Curses::Window.new(Curses.lines / 2, Curses.cols, 0, 0)
      #win.refresh
  end

  def show
    @park = Park.find(params[:id])
  end






end
